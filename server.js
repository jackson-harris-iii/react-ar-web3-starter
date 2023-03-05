const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    if (
      pathname === '/sw.js' ||
      /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)
    ) {
      const filePath = join(__dirname, '.next', pathname);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log('ready - started server on url: https://localhost:' + port);
  });
});
