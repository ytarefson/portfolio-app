const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

///////// Server Configuration  ///////////
app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      "default-src": helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
      "script-src": ["'self'"],
    },
  }));
  server.use(compression({level: 9}));
  // Body parser middleware
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get('/health-check', (req, res) => res.sendStatus(200));  

  ///// Обычные маршруты для страницы /////
  server.get('/', (req, res) =>
    // ssrCache({ req, res, pagePath: '/index' })
    app.render(req, res, '/index')
  );

  ///// Как себя ведем в остальных случаях /////
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
