const express = require('express');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const rootStaticFiles = [
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/mstile-70x70.png',
  '/mstile-144x144.png',
  '/mstile-310x150.png',
  '/mstile-310x310.png',
  '/safari-pinned-tab.svg',
  '/manifest.json',
];

app.prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get('/tag/:name', (req, res) => {
      const actualPage = '/tag';
      const queryParams = { tag: req.params.tag };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);

      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname);
        app.serveStatic(req, res, path);
      } else {
        handle(req, res, parsedUrl);
      }
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
