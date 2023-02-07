const nodemailer = require('nodemailer');
const { logger } = require('../utils');

const { smtp: config } = require('../config');

async function sendMail(content) {
  const { host, port } = config;
  const { to, subject, text } = content;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
  });

  const info = await transporter.sendMail({
    from: 'andrea.angel@adaits.es',
    to,
    subject,
    html: text,
  });

  logger.info(`Message sent: ${info.messageId}`);
}

module.exports = {
  sendMail,
};
