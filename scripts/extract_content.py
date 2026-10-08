#!/usr/bin/env python3
"""
Content & Design Extractor for awake-in.com migration.
Extracts site metadata, homepage sections, and all 12 posts/episodes into TypeScript data files.
"""

import json
import re
import html
import os
from datetime import datetime
from urllib.parse import urlparse
from bs4 import BeautifulSoup

RAW_DIR = "/tmp/awake-in-raw"
HOMEPAGE_HTML_PATH = (
    "/usr/local/google/home/tribble/.gemini/jetski/brain/21bad6fe-046e-4cdd-b090-71465ff227e0/.system_generated/steps/7/content.md"
)
OUTPUT_DATA_DIR = "/usr/local/google/home/tribble/awake-in/src/data"

def clean_uploads_url(url):
    if not url:
        return None
    url = re.sub(r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^?#\s"]+).*', r'\1', url)
    url = re.sub(r'https?://149392508\.v2\.pressablecdn\.com(/wp-content/[^?#\s"]+).*', r'\1', url)
    return url

def clean_content_html(raw_html):
    if not raw_html:
        return ""
    # Remove WordPress audio block / figure
    cleaned = re.sub(r'<figure class="[^"]*wp-block-audio[^"]*".*?</figure>', '', raw_html, flags=re.DOTALL)
    # Remove Audio Version heading if directly above audio
    cleaned = re.sub(r'<h6[^>]*>Audio Version</h6>', '', cleaned, flags=re.IGNORECASE)
    # Rewrite CDN URLs and image URLs to local /wp-content/uploads/
    cleaned = re.sub(r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^\s"\'?#]+)(?:\?[^\s"\'#]*)?', r'\1', cleaned)
    cleaned = re.sub(r'https?://149392508\.v2\.pressablecdn\.com(/wp-content/[^\s"\'?#]+)(?:\?[^\s"\'#]*)?', r'\1', cleaned)
    # Rewrite srcset
    def fix_srcset(match):
        val = match.group(1)
        val = re.sub(r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^\s,]+)', r'\1', val)
        val = re.sub(r'\?[^\s,]*', '', val)
        return f'srcset="{val}"'
    cleaned = re.sub(r'srcset="([^"]+)"', fix_srcset, cleaned)
    # Strip empty paragraph tags at boundaries
    cleaned = re.sub(r'^(?:\s*<p class="[^"]*">\s*</p>\s*)+', '', cleaned)
    cleaned = re.sub(r'(?:\s*<p class="[^"]*">\s*</p>\s*)+$', '', cleaned)
    return cleaned.strip()

def parse_episode_number(slug, title):
    if slug == 'bill':
        return None
    # match 0-1, 0.1, 1-0, 1.0, 10, etc.
    m = re.search(r'episode[_-]?([0-9]+(?:[._-][0-9]+)?)', slug, re.I)
    if m:
        val = m.group(1).replace('-', '.')
        num = float(val)
        return int(num) if num.is_integer() else num
    m = re.search(r'episode\s*([0-9]+(?:\.[0-9]+)?)', title, re.I)
    if m:
        num = float(m.group(1))
        return int(num) if num.is_integer() else num
    return None

def main():
    os.makedirs(OUTPUT_DATA_DIR, exist_ok=True)

    # 1. Load raw files
    with open(f"{RAW_DIR}/pages.json") as f:
        pages = json.load(f)
    with open(f"{RAW_DIR}/posts.json") as f:
        posts = json.load(f)
    with open(f"{RAW_DIR}/media.json") as f:
        media = json.load(f)

    media_by_id = {m['id']: m for m in media}
    audio_media = {}
    for m in media:
        mime = m.get('mime_type', '')
        src = m.get('source_url', '')
        if 'audio' in mime or src.endswith(('.mp3', '.m4a')):
            fname = src.split('/')[-1]
            audio_media[fname] = m
            audio_media[src] = m

    # 2. Extract Episodes
    episodes = []
    for p in posts:
        post_id = p['id']
        slug = p['slug']
        raw_title = p['title']['rendered']
        title = html.unescape(raw_title).strip()
        date_iso = p['date']
        dt = datetime.fromisoformat(date_iso)
        formatted_date = dt.strftime('%B %-d, %Y')
        orig_path = urlparse(p['link']).path
        is_blog = (slug == 'bill')
        category = 'blog' if is_blog else 'podcast'
        ep_num = parse_episode_number(slug, title)

        # Audio resolution
        raw_content = p['content']['rendered']
        audio_srcs = re.findall(r'src=["\']([^"\']+\.(?:mp3|m4a))["\']', raw_content)
        orig_audio_url = audio_srcs[0] if audio_srcs else None

        audio_url = None
        remote_audio_url = None
        audio_type = None
        audio_len = None
        duration = None

        if orig_audio_url:
            fname = orig_audio_url.split('/')[-1]
            audio_url = f"/wp-content/uploads/{orig_audio_url.split('/wp-content/uploads/')[-1]}"
            remote_audio_url = f"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/{fname}"
            audio_type = "audio/mpeg"
            ameta = audio_media.get(fname) or audio_media.get(orig_audio_url)
            if ameta:
                details = ameta.get('media_details', {})
                audio_len = details.get('filesize')
                duration = details.get('length_formatted')

        # Featured image resolution
        featured_media_id = p.get('featured_media')
        featured_media = media_by_id.get(featured_media_id)
        f_src = featured_media.get('source_url') if featured_media else None
        featured_image = f"/wp-content/uploads/{f_src.split('/wp-content/uploads/')[-1]}" if f_src else None

        # Excerpt
        raw_excerpt = p.get('excerpt', {}).get('rendered', '')
        soup_exc = BeautifulSoup(raw_excerpt, 'html.parser')
        excerpt_text = html.unescape(soup_exc.get_text()).strip()

        # Clean content HTML
        cleaned_html = clean_content_html(raw_content)

        episodes.append({
            'id': post_id,
            'slug': slug,
            'title': title,
            'date': date_iso,
            'formattedDate': formatted_date,
            'originalPath': orig_path,
            'category': category,
            'episodeNumber': ep_num,
            'audioUrl': audio_url,
            'remoteAudioUrl': remote_audio_url,
            'originalAudioUrl': orig_audio_url,
            'audioType': audio_type,
            'audioLength': audio_len,
            'duration': duration,
            'featuredImage': featured_image,
            'excerptText': excerpt_text,
            'contentHtml': cleaned_html
        })

    # Sort episodes by date descending
    episodes.sort(key=lambda x: x['date'], reverse=True)

    # 3. Write types.ts
    types_ts = """export interface Episode {
  id: number;
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  originalPath: string;
  category: 'podcast' | 'blog';
  episodeNumber: number | null;
  audioUrl: string | null;
  remoteAudioUrl: string | null;
  originalAudioUrl: string | null;
  audioType: string | null;
  audioLength: number | null;
  duration: string | null;
  featuredImage: string | null;
  excerptText: string;
  contentHtml: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SubscribeLink {
  platform: string;
  url: string;
  icon: string;
  quickIcon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

export interface Host {
  name: string;
  avatar: string;
  bio: string;
  instagram: string;
  mastodon?: string;
}

export interface HeroSection {
  title: string;
  tagline: string;
  desktopBackgroundGif: string;
  mobileAnimationGif: string;
  subscribeCtaText: string;
  quickSubscribeIcons: Array<{
    platform: string;
    icon: string;
    url: string;
  }>;
}

export interface SubscribeModal {
  heading: string;
  description: string;
}

export interface Callout {
  text: string;
  context?: string;
}

export interface SiteMeta {
  title: string;
  tagline: string;
  contactEmail: string;
  navItems: NavItem[];
  subscribeLinks: SubscribeLink[];
  socialLinks: SocialLink[];
  hero: HeroSection;
  subscribeModal: SubscribeModal;
  hosts: Host[];
  featuredEpisodeIds: number[];
  callouts: Callout[];
  footer: {
    heading: string;
    text: string;
    copyright: string;
  };
}
"""
    with open(f"{OUTPUT_DATA_DIR}/types.ts", "w") as f:
        f.write(types_ts)

    # 4. Write siteMeta.ts
    site_meta_ts = """import { SiteMeta } from './types';

export const siteMeta: SiteMeta = {
  title: 'Awake In',
  tagline: 'Chats about mindfulness, wellness, and awakening.',
  contactEmail: 'us@awake-in.com',
  navItems: [
    { label: '🎧 All episodes', path: '/episodes' },
    { label: '✍️ Blog', path: '/blog' },
    { label: '💌 Contact', path: '/contact' },
  ],
  subscribeLinks: [
    {
      platform: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/gb/podcast/awake-in/id1505822560',
      icon: '/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.png',
      quickIcon: '/wp-content/uploads/2020/05/social-music-podcast.svg',
    },
    {
      platform: 'Spotify',
      url: 'https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk',
      icon: '/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.png',
      quickIcon: '/wp-content/uploads/2020/05/social-music-spotify-2.svg',
    },
    {
      platform: 'Google Podcasts',
      url: 'https://podcasts.google.com/?feed=aHR0cDovL3d3dy5hd2FrZS1pbi5jb20vZmVlZC8',
      icon: '/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png',
    },
    {
      platform: 'Stitcher',
      url: 'https://www.stitcher.com/podcast/awake-in',
      icon: '/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Stitcher.png',
    },
    {
      platform: 'RSS',
      url: 'https://awake-in.com/podcasts/awake-in/feed/',
      icon: '/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/RSS.png',
      quickIcon: '/wp-content/uploads/2020/05/rss-feed.svg',
    },
  ],
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/awake_in_',
      handle: '@awake_in_',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/awake_in_',
      handle: '@awake_in_',
    },
  ],
  hero: {
    title: 'Awake In Podcast',
    tagline: 'Chats about mindfulness, wellness, and awakening.',
    desktopBackgroundGif: '/wp-content/uploads/2020/06/Awake_Animation_V2.2020-06-07-18_20_36.gif',
    mobileAnimationGif: '/wp-content/uploads/2020/06/Awake_Animation_V2-mobile.gif',
    subscribeCtaText: 'Listen or Subscribe',
    quickSubscribeIcons: [
      {
        platform: 'Apple Podcasts',
        icon: '/wp-content/uploads/2020/05/social-music-podcast.svg',
        url: 'https://podcasts.apple.com/gb/podcast/awake-in/id1505822560',
      },
      {
        platform: 'Spotify',
        icon: '/wp-content/uploads/2020/05/social-music-spotify-2.svg',
        url: 'https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk',
      },
      {
        platform: 'RSS',
        icon: '/wp-content/uploads/2020/05/rss-feed.svg',
        url: 'https://awake-in.com/podcasts/awake-in/feed/',
      },
    ],
  },
  subscribeModal: {
    heading: 'Listen or Subscribe',
    description: 'Listen or subscribe wherever good podcasts are found.',
  },
  hosts: [
    {
      name: 'Jasmine Che',
      avatar: '/wp-content/uploads/2020/05/jasmine.png',
      bio: 'Jasmine is the youngest Search Inside Yourself™ mindfulness teacher, a heart-based multi-business venturer, plant mum to ~150 babies and is working back to 3 hours of meditation a day. When she ever finds any spare time, she practices Dharma yoga and acrobatics.',
      instagram: 'https://www.instagram.com/thelifeofjasmineche/',
    },
    {
      name: 'Bill Tribble',
      avatar: '/wp-content/uploads/2020/03/bill-1.png',
      bio: 'Bill is a designer, musician, and technologist. He got started in mindfulness via silent retreats in the Goenka tradition. While he’s put in thousands of hours of meditation, he’s probably spent way more time playing computer games and wishes he hadn’t.',
      instagram: 'https://www.instagram.com/bill_tribble/',
      mastodon: 'https://mastodon.design/@bill_tribble',
    },
  ],
  featuredEpisodeIds: [4255, 4064, 3765, 3556],
  callouts: [
    {
      text: 'Chats about mindfulness, wellness, and awakening.',
      context: 'tagline',
    },
    {
      text: 'Listen or subscribe wherever good podcasts are found.',
      context: 'subscribe-modal',
    },
  ],
  footer: {
    heading: '👋 Get in Touch',
    text: 'Comments, suggestions, or guest ideas? We’d love to hear from you. Please get in touch via our site, email, or our socials!',
    copyright: 'Copyright © 2026 Awake In',
  },
};
"""
    with open(f"{OUTPUT_DATA_DIR}/siteMeta.ts", "w") as f:
        f.write(site_meta_ts)

    # 5. Write episodes.ts
    # Keep lines compact and strictly under 500 lines by serializing contentHtml as a JSON string
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
            f"    contentHtml: {json.dumps(ep['contentHtml'], ensure_ascii=False)},\n"
            "  }"
        )
        ep_entries.append(entry)

    episodes_ts = (
        "import { Episode } from './types';\n\n"
        "export const episodes: Episode[] = [\n"
        + ",\n".join(ep_entries)
        + ",\n];\n\n"
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

    print("Data extraction complete.")
    for fname in ["types.ts", "siteMeta.ts", "episodes.ts"]:
        path = f"{OUTPUT_DATA_DIR}/{fname}"
        with open(path) as f:
            line_count = len(f.readlines())
        print(f"File {fname}: {line_count} lines")

if __name__ == "__main__":
    main()
