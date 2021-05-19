var fs = require('fs');
const http = require('https');
const https = require('https');
const express = require('express');
const cors = require('cors');
const next = require('next');
const multer  = require('multer')

const contactController = require('./controllers/contact');

// Enviroment Variables
const dev = process.env.NODE_ENV !== 'production';
const PORT  = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3001;
const CERTIFICATE_KEY_PATH = process.env.CERTIFICATE_KEY_PATH || undefined
const CERTIFICATE_CERT_PATH = process.env.CERTIFICATE_CERT_PATH || undefined
const CERTIFICATE_CA_PATH = process.env.CERTIFICATE_CA_PATH || undefined

const app = next({ dev });
const handle = app.getRequestHandler();
const upload = multer(); // handles forms data

// Configure HTTPS
var httpsCredentials = { key: undefined, cert: undefined, ca: undefined }
if(CERTIFICATE_KEY_PATH && CERTIFICATE_CERT_PATH && CERTIFICATE_CA_PATH ){
  httpsCredentials = {
    key:  fs.readFileSync(process.env.CERTIFICATE_KEY_PATH),
    cert: fs.readFileSync(process.env.CERTIFICATE_CERT_PATH),
    ca:   fs.readFileSync(process.env.CERTIFICATE_CA_PATH)
  };
}

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.post('/api/contact/email', upload.none(), contactController.email);

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  // Starting HTTP
  var httpServer = http.createServer(server)
  server.listen(PORT, (err) => {
    if (err) throw err
      console.log('Listen HTTP on port ', PORT);
  });

  // Starting HTTPS if certificate setted
  if(CERTIFICATE_KEY_PATH && CERTIFICATE_CERT_PATH && CERTIFICATE_CA_PATH){
    var httpsServer = https.createServer(httpsCredentials, server)
    httpsServer.listen(HTTPS_PORT, (err) => {
      if (err) throw err
        console.log('Listen HTTPS on port ', HTTPS_PORT);
    });
  }
});
