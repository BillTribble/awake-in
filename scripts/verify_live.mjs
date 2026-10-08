import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = '/usr/local/google/home/tribble/.gemini/jetski/brain/21bad6fe-046e-4cdd-b090-71465ff227e0';
const LIVE_URL = 'https://billtribble.github.io/awake-in/';

async function verifyLive() {
  console.log('Testing live GitHub Pages site at:', LIVE_URL);

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  const pageErrors = [];
  const networkErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('Console error:', msg.text());
    }
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err.toString());
    console.error('Page error:', err.toString());
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      networkErrors.push(`${res.status()} ${res.url()}`);
      console.warn(`HTTP ${res.status()}: ${res.url()}`);
    }
  });

  console.log('1. Loading Homepage...');
  const resp = await page.goto(LIVE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
  console.log('Homepage status:', resp ? resp.status() : 'no response');

  const title = await page.title();
  console.log('Page title:', title);

  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML?.length || 0);
  console.log('Root HTML length:', rootHtml);

  // Check images
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.src || img.getAttribute('src'));
  });
  console.log('Broken images count:', brokenImages.length);
  if (brokenImages.length > 0) {
    console.error('Broken images:', brokenImages);
  }

  // Check Material Symbols ligatures
  const invalidIcons = await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.material-symbols-rounded')).map((el) => el.textContent.trim());
    return icons.filter((name) => name === 'replay_15' || name === 'forward_15');
  });
  console.log('Invalid icon ligatures found:', invalidIcons);

  const liveHomePath = path.join(SCREENSHOT_DIR, 'awake_in_ghpages_live.png');
  await page.screenshot({ path: liveHomePath, fullPage: false });
  console.log('Screenshot saved to:', liveHomePath);

  // Test episode navigation
  console.log('2. Testing episode detail navigation...');
  const firstEpisodeLink = await page.evaluate(() => {
    const link = document.querySelector('a[href*="/episode-"]');
    return link ? link.getAttribute('href') : null;
  });
  console.log('First episode link found:', firstEpisodeLink);

  if (firstEpisodeLink) {
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
      page.click('a[href*="/episode-"]'),
    ]);
    console.log('Navigated to:', page.url());
    const episodeTitle = await page.title();
    console.log('Episode page title:', episodeTitle);
    const episodeBrokenImgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src || img.getAttribute('src'));
    });
    console.log('Episode broken images count:', episodeBrokenImgs.length);
  }

  await browser.close();

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  console.log(`Page Errors: ${pageErrors.length}`);
  console.log(`Network Errors: ${networkErrors.length}`);
  console.log(`Broken Images: ${brokenImages.length}`);
  console.log(`Invalid Icon Ligatures: ${invalidIcons.length}`);

  if (consoleErrors.length === 0 && pageErrors.length === 0 && brokenImages.length === 0 && invalidIcons.length === 0) {
    console.log('✅ ALL CHECKS PASSED PERFECTLY!');
  } else {
    console.error('❌ SOME CHECKS FAILED!');
    process.exit(1);
  }
}

verifyLive().catch((err) => {
  console.error('Verification script failed:', err);
  process.exit(1);
});
