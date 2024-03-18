// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express'); // Import Express
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const _port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express(); // Create an Express server

  // Define your API proxy here
  server.use(
    createProxyMiddleware('/api', {
      target: 'https://dev-api.keywae.com/helpcare/',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/v1': 'v1',
      },
    })
  );

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const httpServer = createServer(server);

  httpServer.listen(_port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + _port);
  });
});
