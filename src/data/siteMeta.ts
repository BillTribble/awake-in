import { SiteMeta } from './types';
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
