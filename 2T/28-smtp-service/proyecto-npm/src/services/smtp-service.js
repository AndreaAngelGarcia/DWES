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
      accessToken: 'ya29.a0AVvZVsqFrQsGRYHGKOvjtelBfFUnoO4LsyutsXrdiXxuLZ5ivd-1z1UGc7Cc9X9aEbOnm3_3CTvwJ2bjMshNIvRcRLhYOgWbHHVAXYGfQ0Oo1_NRuCFz9OLie_-0KTBmyRppOqZaOSJg4m0y7qDWgGkN-2co4yEaCgYKAU4SAQASFQGbdwaIbEUshvFvkHcDberLFlpCDQ0166',
      clientId: '1040573630954-4bs8cj3qupnfhaj18hi2e4ihcf8uf6dh.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04_76B-PaptdHCgYIARAAGAQSNwF-L9Irg7PJQnN2OU2DzWsSexvvtvNX2qUOZW6e-N6_bP7ZovpqVpaBHoniH7lVgCRDrQGbT1w',
    },
  });

  const info = await transporter.sendMail({
    from: 'andreaangelgarcia@gmail.com',
    to: 'andrea.angel@adaits.es',
    subject,
    text,
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  sendMail,
};
