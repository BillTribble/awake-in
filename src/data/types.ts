export interface Episode {
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
