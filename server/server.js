const express = require('express');
const cors = require('cors');
const next = require('next');

const contactController = require('./controllers/contact');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.port || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.urlencoded({ extended: true })); // allows parsing html forms content from post request
  server.use(cors());

  server.post('/api/contact/email', contactController.email);

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port', PORT);
  });
});