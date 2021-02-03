const sgMail = require('@sendgrid/mail');

const { validateCaptcha } = require('../captcha');
const { RESPONSES } = require('../responses');

// echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // If this doesn't work check if the key is at the env

const CAPTCHA_SERVER_KEY = process.env.CAPTCHA_SERVER_KEY;

const sendEmail = async (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    text,
  }

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }

    return RESPONSES.SERVER_ERROR;
  }

  return RESPONSES.SUCCESS;
}

const email = async (req, res) => {
  const { sender, topic, text, 'g-recaptcha-response': userCaptchaToken } = req.body;
  
  const captchaResult = await validateCaptcha(CAPTCHA_SERVER_KEY, userCaptchaToken[0]);
  if (captchaResult === RESPONSES.WRONG_TOKEN) {
    return res.status(400).send();
  } else if (captchaResult === RESPONSES.SERVER_ERROR) {
    return res.status(500).send();
  }
  
  const emailResult = await sendEmail('ganesh@icmc.usp.br', sender, topic, text);
  if (emailResult === RESPONSES.SERVER_ERROR) {
    return res.status(500).send();
  }

  res.status(200).send();
}

exports.email = email;
