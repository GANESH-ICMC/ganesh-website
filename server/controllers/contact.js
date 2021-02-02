const sgMail = require('@sendgrid/mail');

const { validateCaptcha, RESPONSES } = require('../captcha');

// echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // If this doesn't work check if the key is at the env

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY;

const email = async (req, res) => {
  const { sender, topic, text, 'g-recaptcha-response': userCaptchaToken } = req.body;
  
  const captchaResult = await validateCaptcha(RECAPTCHA_SERVER_KEY, userCaptchaToken);
  if (captchaResult === RESPONSES.WRONG_TOKEN) {
    return res.status(400).send();
  } else if (captchaResult === RESPONSES.SERVER_ERROR) {
    return res.status(500).send();
  }

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
