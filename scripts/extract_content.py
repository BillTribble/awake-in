#!/usr/bin/env python3
"""Content & Design Extractor for awake-in.com migration."""

from datetime import datetime
import html
import json
import os
import re
from urllib.parse import urlparse
from bs4 import BeautifulSoup

from extract_helpers import (
    clean_content_html,
    parse_episode_number,
    SITE_META_TS_TEMPLATE,
    TYPES_TS_TEMPLATE,
)

RAW_DIR = "/tmp/awake-in-raw"
OUTPUT_DATA_DIR = "/usr/local/google/home/tribble/awake-in/src/data"


def extract_page_excerpts(page_obj):
  if not page_obj:
    return {}
  soup = BeautifulSoup(page_obj["content"]["rendered"], "html.parser")
  out = {}
  for a in soup.find_all("article"):
    aid = a.get("id", "").replace("post-", "")
    exc = a.find("div", class_="gb-block-post-grid-excerpt")
    if exc:
      for link in exc.find_all("a", class_="gb-block-post-grid-more-link"):
        link.decompose()
      for para in exc.find_all("p"):
        if not para.get_text(strip=True):
          para.decompose()
      out[aid] = "".join(str(c) for c in exc.contents).strip()
  return out


def main():
  os.makedirs(OUTPUT_DATA_DIR, exist_ok=True)

  # 1. Load raw files
  with open(f"{RAW_DIR}/pages.json") as f:
    pages = json.load(f)
  with open(f"{RAW_DIR}/posts.json") as f:
    posts = json.load(f)
  with open(f"{RAW_DIR}/media.json") as f:
    media = json.load(f)

  pages_by_id = {p["id"]: p for p in pages}
  excerpts_4305 = extract_page_excerpts(pages_by_id.get(4305))
  excerpts_4167 = extract_page_excerpts(pages_by_id.get(4167))
  excerpts_6 = extract_page_excerpts(pages_by_id.get(6))

  media_by_id = {m["id"]: m for m in media}
  audio_media = {}
  for m in media:
    mime = m.get("mime_type", "")
    src = m.get("source_url", "")
    if "audio" in mime or src.endswith((".mp3", ".m4a")):
      fname = src.split("/")[-1]
      audio_media[fname] = m
      audio_media[src] = m

  # 2. Extract Episodes
  episodes = []
  for p in posts:
    post_id = p["id"]
    slug = p["slug"]
    raw_title = p["title"]["rendered"]
    title = html.unescape(raw_title).strip()
    date_iso = p["date"]
    dt = datetime.fromisoformat(date_iso)
    formatted_date = dt.strftime("%B %-d, %Y")
    orig_path = urlparse(p["link"]).path
    is_blog = slug == "bill"
    category = "blog" if is_blog else "podcast"
    ep_num = parse_episode_number(slug, title)

    raw_content = p["content"]["rendered"]
    audio_srcs = re.findall(
        r'src=["\']([^"\']+\.(?:mp3|m4a))["\']', raw_content
    )
    orig_audio_url = audio_srcs[0] if audio_srcs else None

    audio_url = None
    remote_audio_url = None
    audio_type = None
    audio_len = None
    duration = None

    if orig_audio_url:
      fname = orig_audio_url.split("/")[-1]
      audio_url = (
          "/wp-content/uploads/"
          + orig_audio_url.split("/wp-content/uploads/")[-1]
      )
      remote_audio_url = f"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/{fname}"
      audio_type = "audio/mpeg"
      ameta = audio_media.get(fname) or audio_media.get(orig_audio_url)
      if ameta:
        details = ameta.get("media_details", {})
        audio_len = details.get("filesize")
        duration = details.get("length_formatted")

    featured_media_id = p.get("featured_media")
    featured_media = media_by_id.get(featured_media_id)
    f_src = featured_media.get("source_url") if featured_media else None
    featured_image = (
        f"/wp-content/uploads/{f_src.split('/wp-content/uploads/')[-1]}"
        if f_src
        else None
    )

    pid_str = str(post_id)
    excerpt_html = (
        excerpts_4305.get(pid_str)
        or excerpts_4167.get(pid_str)
        or p.get("excerpt", {}).get("rendered", "").strip()
    )
    featured_excerpt_html = excerpts_6.get(pid_str)

    soup_exc = BeautifulSoup(excerpt_html, "html.parser")
    excerpt_text = html.unescape(soup_exc.get_text()).strip()

    cleaned_html = clean_content_html(raw_content)

    episodes.append({
        "id": post_id,
        "slug": slug,
        "title": title,
        "date": date_iso,
        "formattedDate": formatted_date,
        "originalPath": orig_path,
        "category": category,
        "episodeNumber": ep_num,
        "audioUrl": audio_url,
        "remoteAudioUrl": remote_audio_url,
        "originalAudioUrl": orig_audio_url,
        "audioType": audio_type,
        "audioLength": audio_len,
        "duration": duration,
        "featuredImage": featured_image,
        "excerptText": excerpt_text,
        "excerptHtml": excerpt_html,
        "featuredExcerptHtml": featured_excerpt_html,
        "contentHtml": cleaned_html,
    })

  episodes.sort(key=lambda x: x["date"], reverse=True)

  # 3. Write types.ts
  with open(f"{OUTPUT_DATA_DIR}/types.ts", "w") as f:
    f.write(TYPES_TS_TEMPLATE)

  # 4. Write siteMeta.ts
  with open(f"{OUTPUT_DATA_DIR}/siteMeta.ts", "w") as f:
    f.write(SITE_META_TS_TEMPLATE)

  # 5. Write episodes.ts
  ep_entries = []
  for ep in episodes:
    entry = (
        "  {\n"
        f"    id: {ep['id']},\n"
        f"    slug: {json.dumps(ep['slug'], ensure_ascii=False)},\n"
        f"    title: {json.dumps(ep['title'], ensure_ascii=False)},\n"
        f"    date: {json.dumps(ep['date'], ensure_ascii=False)},\n"
        f"    formattedDate: {json.dumps(ep['formattedDate'], ensure_ascii=False)},\n"
        f"    originalPath: {json.dumps(ep['originalPath'], ensure_ascii=False)},\n"
        f"    category: {json.dumps(ep['category'], ensure_ascii=False)},\n"
        f"    episodeNumber: {'null' if ep['episodeNumber'] is None else ep['episodeNumber']},\n"
        f"    audioUrl: {json.dumps(ep['audioUrl'], ensure_ascii=False)},\n"
        f"    remoteAudioUrl: {json.dumps(ep['remoteAudioUrl'], ensure_ascii=False)},\n"
        f"    originalAudioUrl: {json.dumps(ep['originalAudioUrl'], ensure_ascii=False)},\n"
        f"    audioType: {json.dumps(ep['audioType'], ensure_ascii=False)},\n"
        f"    audioLength: {'null' if ep['audioLength'] is None else ep['audioLength']},\n"
        f"    duration: {json.dumps(ep['duration'], ensure_ascii=False)},\n"
        f"    featuredImage: {json.dumps(ep['featuredImage'], ensure_ascii=False)},\n"
        f"    excerptText: {json.dumps(ep['excerptText'], ensure_ascii=False)},\n"
        f"    excerptHtml: {json.dumps(ep['excerptHtml'], ensure_ascii=False)},\n"
        f"    featuredExcerptHtml: {json.dumps(ep['featuredExcerptHtml'], ensure_ascii=False)},\n"
        f"    contentHtml: {json.dumps(ep['contentHtml'], ensure_ascii=False)},\n"
        "  }"
    )
    ep_entries.append(entry)

  episodes_ts = (
      "import { Episode } from './types';\n"
      "import { withBase, withBaseHtml } from '../utils/basePath';\n\n"
      "const rawEpisodes: Episode[] = [\n"
      + ",\n".join(ep_entries)
      + ",\n];\n\n"
      "export const episodes: Episode[] = rawEpisodes.map((ep) => ({\n"
      "  ...ep,\n"
      "  audioUrl: ep.audioUrl ? withBase(ep.audioUrl) : null,\n"
      "  featuredImage: ep.featuredImage ? withBase(ep.featuredImage) : null,\n"
      "  excerptHtml: withBaseHtml(ep.excerptHtml),\n"
      "  featuredExcerptHtml: ep.featuredExcerptHtml ? withBaseHtml(ep.featuredExcerptHtml) : null,\n"
      "  contentHtml: withBaseHtml(ep.contentHtml),\n"
      "}));\n\n"
      "export const getEpisodeBySlug = (slug: string): Episode | undefined => {\n"
      "  return episodes.find((ep) => ep.slug === slug);\n"
      "};\n\n"
      "export const getEpisodeById = (id: number): Episode | undefined => {\n"
      "  return episodes.find((ep) => ep.id === id);\n"
      "};\n\n"
      "export const podcastEpisodes = episodes.filter((ep) => ep.category === 'podcast');\n"
      "export const blogPosts = episodes.filter((ep) => ep.category === 'blog');\n"
  )

  with open(f"{OUTPUT_DATA_DIR}/episodes.ts", "w") as f:
    f.write(episodes_ts)

if __name__ == "__main__":
  main()
