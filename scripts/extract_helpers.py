#!/usr/bin/env python3
"""Helper utilities and templates for extract_content.py."""

import re


def clean_uploads_url(url):
  if not url:
    return None
  url = re.sub(
      r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^?#\s"]+).*',
      r'\1',
      url,
  )
  url = re.sub(
      r'https?://149392508\.v2\.pressablecdn\.com(/wp-content/[^?#\s"]+).*',
      r'\1',
      url,
  )
  return url


def clean_content_html(raw_html):
  if not raw_html:
    return ""

  cleaned = re.sub(
      r'<figure class="[^"]*wp-block-audio[^"]*".*?</figure>',
      '',
      raw_html,
      flags=re.DOTALL,
  )
  cleaned = re.sub(
      r'<h[1-6][^>]*>Audio Version</h[1-6]>', '', cleaned, flags=re.IGNORECASE
  )
  cleaned = re.sub(
      r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^\s"\'?#]+)(?:\?[^\s"\'#]*)?',
      r'\1',
      cleaned,
  )
  cleaned = re.sub(
      r'https?://149392508\.v2\.pressablecdn\.com(/wp-content/[^\s"\'?#]+)(?:\?[^\s"\'#]*)?',
      r'\1',
      cleaned,
  )

  def fix_srcset(match):
    val = match.group(1)
    val = re.sub(
        r'https?://(?:i[0-9]\.wp\.com/)?awake-in\.com(/wp-content/uploads/[^\s,]+)',
        r'\1',
        val,
    )
    val = re.sub(r'\?[^\s,]*', '', val)
    return f'srcset="{val}"'

  cleaned = re.sub(r'srcset="([^"]+)"', fix_srcset, cleaned)
  cleaned = re.sub(r'^(?:\s*<p class="[^"]*">\s*</p>\s*)+', '', cleaned)
  cleaned = re.sub(r'(?:\s*<p class="[^"]*">\s*</p>\s*)+$', '', cleaned)
  return cleaned.strip()


def parse_episode_number(slug, title):
  if slug == 'bill':
    return None
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


TYPES_TS_TEMPLATE = """export interface Episode {
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
  excerptHtml: string;
  featuredExcerptHtml: string | null;
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

SITE_META_TS_TEMPLATE = """import { SiteMeta } from './types';
import { withBase } from '../utils/basePath';

export const siteMeta: SiteMeta = {
  title: 'Awake In',
  tagline: 'Chats about mindfulness, wellness, and awakening.',
  contactEmail: 'us@awake-in.com',
  navItems: [
    { label: '🎧 All episodes', path: '/%f0%9f%8e%a7-all-episodes' },
    { label: '✍️ Blog', path: '/blog' },
    { label: '💌 Contact', path: '/contact' },
  ],
  subscribeLinks: [
    {
      platform: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/gb/podcast/awake-in/id1505822560',
      icon: withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.png'),
      quickIcon: withBase('/wp-content/uploads/2020/05/social-music-podcast.svg'),
    },
    {
      platform: 'Spotify',
      url: 'https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk',
      icon: withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.png'),
      quickIcon: withBase('/wp-content/uploads/2020/05/social-music-spotify-2.svg'),
    },
    {
      platform: 'Google Podcasts',
      url: 'https://podcasts.google.com/?feed=aHR0cDovL3d3dy5hd2FrZS1pbi5jb20vZmVlZC8',
      icon: withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png'),
    },
    {
      platform: 'Stitcher',
      url: 'https://www.stitcher.com/podcast/awake-in',
      icon: withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Stitcher.png'),
    },
    {
      platform: 'RSS',
      url: 'https://awake-in.com/podcasts/awake-in/feed/',
      icon: withBase('/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/RSS.png'),
      quickIcon: withBase('/wp-content/uploads/2020/05/rss-feed.svg'),
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
    desktopBackgroundGif: withBase('/wp-content/uploads/2020/06/Awake_Animation_V2.2020-06-07-18_20_36.gif'),
    mobileAnimationGif: withBase('/wp-content/uploads/2020/06/Awake_Animation_V2-mobile.gif'),
    subscribeCtaText: 'Listen or Subscribe',
    quickSubscribeIcons: [
      {
        platform: 'Apple Podcasts',
        icon: withBase('/wp-content/uploads/2020/05/social-music-podcast.svg'),
        url: 'https://podcasts.apple.com/gb/podcast/awake-in/id1505822560',
      },
      {
        platform: 'Spotify',
        icon: withBase('/wp-content/uploads/2020/05/social-music-spotify-2.svg'),
        url: 'https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk',
      },
      {
        platform: 'RSS',
        icon: withBase('/wp-content/uploads/2020/05/rss-feed.svg'),
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
      avatar: withBase('/wp-content/uploads/2020/05/jasmine.png'),
      bio: 'Jasmine is the youngest Search Inside Yourself™ mindfulness teacher, a heart-based multi-business venturer, plant mum to ~150 babies and is working back to 3 hours of meditation a day. When she ever finds any spare time, she practices Dharma yoga and acrobatics.',
      instagram: 'https://www.instagram.com/thelifeofjasmineche/',
    },
    {
      name: 'Bill Tribble',
      avatar: withBase('/wp-content/uploads/2020/03/bill-1.png'),
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
