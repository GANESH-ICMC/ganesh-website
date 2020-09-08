const express = require('express');
const cors = require('cors')
const sgMail = require('@sendgrid/mail')

const app = express();

// echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // If this doesn't work check if the key is at the env

app.use(cors());

app.get('/'), (req, res) => {
  req.send('Welcome to the sendgrid email server');
}

// email page
app.get('/send-email', (req, res) => {
  const { sender, topic, text  } = req.query; 

  // Sendgrid stuff
  const msg = {
    to: 'ganesh@icmc.usp.br',
    from: sender,
    subject: topic,
    text: text,
  }

  sgMail.send(msg);
})

app.listen(9999, () => console.log("Running on port 9999"));
