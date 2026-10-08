import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function awakeInStaticPlugin(): Plugin {
  const handleCustomRoutes = (req: any, res: any, next: any) => {
    // Strip subpath /awake-in if requested in dev/preview
    if (req.url && (req.url === '/awake-in' || req.url.startsWith('/awake-in/'))) {
      req.url = req.url.replace(/^\/awake-in/, '') || '/';
    }

    const url = req.url ? req.url.split('?')[0] : '';

    // a) Serves /feed and /feed/ from public/feed.xml
    if (url === '/feed' || url === '/feed/') {
      const feedPath = path.resolve(__dirname, 'public/feed.xml');
      if (fs.existsSync(feedPath)) {
        res.writeHead(200, {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'no-cache',
        });
        return fs.createReadStream(feedPath).pipe(res);
      }
    }

    // b) Serves podcast feeds from public/podcasts/awake-in/feed/index.xml
    const podcastFeedRoutes = [
      '/podcast',
      '/podcast/',
      '/feed/podcast',
      '/feed/podcast/',
      '/podcasts/awake-in/feed',
      '/podcasts/awake-in/feed/',
    ];
    if (podcastFeedRoutes.includes(url)) {
      const podcastFeedPath = path.resolve(
        __dirname,
        'public/podcasts/awake-in/feed/index.xml'
      );
      if (fs.existsSync(podcastFeedPath)) {
        res.writeHead(200, {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'no-cache',
        });
        return fs.createReadStream(podcastFeedPath).pipe(res);
      }
    }

    // c) Audio streaming from /tmp/awake-in-audio/
    if (url.startsWith('/wp-content/uploads/') && (url.endsWith('.mp3') || url.endsWith('.m4a'))) {
      const relPath = url.replace('/wp-content/uploads/', '');
      const audioPath = path.resolve('/tmp/awake-in-audio', relPath);

      if (fs.existsSync(audioPath)) {
        const stat = fs.statSync(audioPath);
        const fileSize = stat.size;
        const range = req.headers.range;
        const contentType = audioPath.endsWith('.m4a') ? 'audio/mp4' : 'audio/mpeg';

        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunkSize = end - start + 1;
          res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
          });
          return fs.createReadStream(audioPath, { start, end }).pipe(res);
        } else {
          res.writeHead(200, {
            'Content-Length': fileSize,
            'Content-Type': contentType,
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'no-cache',
          });
          return fs.createReadStream(audioPath).pipe(res);
        }
      }
    }

    next();
  };

  return {
    name: 'awake-in-static-plugin',
    configureServer(server) {
      server.middlewares.use(handleCustomRoutes);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleCustomRoutes);
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.VITE_BASE_PATH || '/awake-in/') : '/',
  plugins: [react(), awakeInStaticPlugin()],
  server: {
    port: 3005,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: false,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
  preview: {
    port: 3005,
    strictPort: true,
    host: '0.0.0.0',
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
}));
