const axios = require('axios');

const { RESPONSES } = require('./responses');

const validateCaptcha = async (key, token) => {
  const captchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`;
  
  try {
    const captchaResult = await axios.post(captchaURL, {});

    if (!captchaResult.data.success) {
      const error = captchaResult.data['error-codes'][0];
      if (error === 'missing-input-response' || 
          error === 'invalid-input-response' ||
          error === 'timeout-or-duplicate') {
        // User sent the wrong captcha token
        return RESPONSES.WRONG_TOKEN;
      } else {
        // Probably something wrong server-side
        console.log(
          'CAPTCHAR ERROR:', 
          captchaResult.data, 
          'Check https://developers.google.com/recaptcha/docs/verify for more information'
        );
        return RESPONSES.SERVER_ERROR;
      }
    }
  } catch (err) {
    console.error(err);
    return RESPONSES.SERVER_ERROR;
  }

  return RESPONSES.SUCCESS;
}

module.exports = { validateCaptcha };
