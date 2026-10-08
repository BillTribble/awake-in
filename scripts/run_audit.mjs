import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = '/usr/local/google/home/tribble/.gemini/jetski/brain/21bad6fe-046e-4cdd-b090-71465ff227e0';
const BASE_URL = 'http://localhost:3005';

async function runAudit() {
  console.log('Starting Puppeteer Chrome audit on', BASE_URL);

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('Browser console.error:', msg.text());
    }
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err.toString());
    console.error('Browser pageerror:', err.toString());
  });

  async function checkImages(pageName) {
    const broken = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src || img.getAttribute('src'));
    });
    if (broken.length > 0) {
      console.warn(`[${pageName}] Found ${broken.length} broken images:`, broken);
    } else {
      console.log(`[${pageName}] All images loaded successfully.`);
    }
    return broken;
  }

  // 1. Homepage — Light mode
  console.log('Auditing Homepage (Light mode)...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('awake-in-theme', 'light');
  });
  await new Promise((r) => setTimeout(r, 600));
  await checkImages('Homepage Light');
  const homeLightPath = path.join(SCREENSHOT_DIR, 'awake_in_home_light.png');
  await page.screenshot({ path: homeLightPath, fullPage: false });
  console.log('Saved:', homeLightPath);

  // 2. Homepage — Dark mode
  console.log('Switching to Dark mode...');
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('awake-in-theme', 'dark');
  });
  await new Promise((r) => setTimeout(r, 600));
  const homeDarkPath = path.join(SCREENSHOT_DIR, 'awake_in_home_dark.png');
  await page.screenshot({ path: homeDarkPath, fullPage: false });
  console.log('Saved:', homeDarkPath);

  // Switch back to original Light mode for remaining pages
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('awake-in-theme', 'light');
  });
  await new Promise((r) => setTimeout(r, 400));

  // 3. Subscribe modal
  console.log('Opening Subscribe Modal...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find((b) =>
      b.textContent.includes('Listen or Subscribe')
    );
    if (btn) btn.click();
  });
  await page.waitForSelector('.paoc-popup-modal', { visible: true });
  await new Promise((r) => setTimeout(r, 500));
  await checkImages('Subscribe Modal');
  const modalPath = path.join(SCREENSHOT_DIR, 'awake_in_subscribe_modal.png');
  await page.screenshot({ path: modalPath, fullPage: false });
  console.log('Saved:', modalPath);

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await new Promise((r) => setTimeout(r, 400));

  // 4. Episode 10 Detail page & Inline Player
  console.log('Auditing Episode 10 Detail page...');
  await page.goto(`${BASE_URL}/2022/04/21/episode-10-retreats/`, { waitUntil: 'networkidle0' });
  await checkImages('Episode 10 Detail');

  // Click play button on inline player
  console.log('Clicking Inline Player Play button...');
  await page.evaluate(() => {
    const playBtn = document.querySelector('button[aria-label*="Play"]') || document.querySelector('.inline-player button');
    if (playBtn) playBtn.click();
  });
  await new Promise((r) => setTimeout(r, 800));

  const detailPath = path.join(SCREENSHOT_DIR, 'awake_in_episode_detail.png');
  await page.screenshot({ path: detailPath, fullPage: false });
  console.log('Saved:', detailPath);

  // 5. All Episodes page with Persistent Bottom Player
  console.log('Auditing Episodes page & Bottom Audio Player...');
  await page.goto(`${BASE_URL}/%f0%9f%8e%a7-all-episodes`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 500));
  await checkImages('Episodes Page');
  const episodesPath = path.join(SCREENSHOT_DIR, 'awake_in_episodes_player.png');
  await page.screenshot({ path: episodesPath, fullPage: false });
  console.log('Saved:', episodesPath);

  // 6. Contact Page
  console.log('Auditing Contact page...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  await checkImages('Contact Page');
  const contactPath = path.join(SCREENSHOT_DIR, 'awake_in_contact_page.png');
  await page.screenshot({ path: contactPath, fullPage: false });
  console.log('Saved:', contactPath);

  // 7. Episode 09 — Centered YouTube Video Embed in Post Page
  console.log('Auditing Episode 09 Centered YouTube Video...');
  await page.goto(`${BASE_URL}/2021/10/11/episode-09-reunion/`, { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    const embed = document.querySelector('figure.wp-block-embed') || document.querySelector('iframe[src*="youtube"]');
    if (embed) embed.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise((r) => setTimeout(r, 800));
  const ytPath = path.join(SCREENSHOT_DIR, 'awake_in_youtube_centered.png');
  await page.screenshot({ path: ytPath, fullPage: false });
  console.log('Saved:', ytPath);

  await browser.close();

  console.log('\n=== AUDIT RESULTS ===');
  console.log('Console Errors:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach((e) => console.log('  -', e));
  }
  console.log('Page Errors:', pageErrors.length);
  if (pageErrors.length > 0) {
    pageErrors.forEach((e) => console.log('  -', e));
  }

  const screenshots = [
    'awake_in_home_light.png',
    'awake_in_home_dark.png',
    'awake_in_subscribe_modal.png',
    'awake_in_episodes_player.png',
    'awake_in_episode_detail.png',
    'awake_in_contact_page.png',
    'awake_in_youtube_centered.png',
  ];

  console.log('\n=== SCREENSHOT ARTIFACTS ===');
  for (const s of screenshots) {
    const p = path.join(SCREENSHOT_DIR, s);
    if (fs.existsSync(p)) {
      const stats = fs.statSync(p);
      console.log(`- ${s}: ${(stats.size / 1024).toFixed(1)} kB (${p})`);
    } else {
      console.error(`- MISSING: ${s}`);
    }
  }
}

runAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
