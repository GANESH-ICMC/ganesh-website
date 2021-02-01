const sgMail = require('@sendgrid/mail');

// echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // If this doesn't work check if the key is at the env

const email = (req, res) => {
  const { sender, topic, text } = req.body;

  // Sendgrid stuff
  const msg = {
    to: 'ganesh@icmc.usp.br',
    from: sender,
    subject: topic,
    text: text,
  }
  sgMail.send(msg);

  res.status(200).send();
}

exports.email = email;