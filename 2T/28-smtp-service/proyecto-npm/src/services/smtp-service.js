const nodemailer = require('nodemailer');
const { logger } = require('../utils');

const { smtp: config } = require('../config');

async function sendMail(content) {
  const { user } = config;
  const { to, subject, text } = content;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      type: 'OAuth2',
      user,
      accessToken: 'ya29.a0AVvZVsqwTsFnLJyhFIWEnMlaM7e-M-l_XP_rctwk1FA-adxdTFH-8jeY4Ky7TUck581SIp8A5i-0WNB6tEArLGsoSeLta4-IOFoLk-RaVKKIieS9BecIH5K0K0gsE_0MIV4ngpu1PQxaoLD5woObfm9eDrdYaCgYKAQYSARISFQGbdwaILMb2ZyV1xTSZxUMYUvz97g0163',
      clientId: '1040573630954-4bs8cj3qupnfhaj18hi2e4ihcf8uf6dh.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04CIAHocJkiWMCgYIARAAGAQSNwF-L9Iryw70fz5xybBGfXPglcBCn0RWe8CUFZoOhzJEMaHldC7gdRR0mpJKHqywdeMEdiLrJ1k',
    },
  });

  const info = await transporter.sendMail({
    from: 'andreaangelgarcia@gmail.com',
    to,
    subject,
    text,
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  sendMail,
};
