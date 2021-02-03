const express = require('express');
const cors = require('cors');
const next = require('next');
const multer  = require('multer')

const contactController = require('./controllers/contact');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const upload = multer(); // handles forms data

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.post('/api/contact/email', upload.none(), contactController.email);

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port', PORT);
  });
});
