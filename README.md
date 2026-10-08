# Awake In 🎙️

> London-based podcast and blog on mindfulness, wellness, and awakening, hosted by Jasmine Che & Bill Tribble.

This repository hosts the static React + Vite web application, RSS podcast feeds, and complete media archive migrated from the original WordPress site (`https://awake-in.com`).

---

## Architecture & Migration

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide icons.
- **Data Layer**: Clean typed data in `src/data/` distilled from WordPress REST API exports:
  - 11 podcast episodes (Episode 10 down to Episode 0.1 Introduction)
  - Blog post ("Hello World! 👋")
  - Host bios and social links
- **Static Assets**: All original images, brand marks, and subscribe icons preserved in `public/wp-content/`.

---

## Static RSS & Podcast Feeds

The site preserves canonical WordPress RSS endpoints and iTunes-compliant podcast feeds directly inside `public/`:

- **Main General Feeds** (12 items: 11 episodes + blog post):
  - `public/feed.xml`
  - `public/feed/index.xml`
  - `public/feed-github.xml` (enclosures pointing to GitHub Releases)
- **Podcast Feeds** (11 episodes with full `<itunes:*>` metadata & durations):
  - `public/podcast.xml`
  - `public/feed/podcast/index.xml`
  - `public/podcasts/awake-in/feed/index.xml` (canonical WordPress feed URL)
  - `public/podcast-github.xml` (enclosures pointing to GitHub Releases)

---

## Podcast Audio Archival (GitHub Releases)

Because podcast audio files exceed git repository size limits (~1.45 GB total across 12 files), audio is preserved on GitHub Releases:

- **Release**: [`v1.0.0` Audio Archive](https://github.com/BillTribble/awake-in/releases/tag/v1.0.0)
- **Assets**: 12 audio files (`.mp3` and `.m4a`) accessible via:
  `https://github.com/BillTribble/awake-in/releases/download/v1.0.0/<filename>`
- **Local Development**: In dev mode, audio is served transparently from local storage (`/tmp/awake-in-audio/`) via Vite middleware without bloating the git repo or build artifacts.

---

## Development & Build

### Prerequisites
- Node.js 20+
- npm

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Build output is generated into `dist/`.

### Deployment
Automatic deployment to GitHub Pages is configured via `.github/workflows/deploy.yml` on every push to the `main` branch.
