const smtpService = require('../services/smtp-service');

async function createMail(req, res, next) {
  try {
    const { to, subject, text } = req.body;
    const emailId = await smtpService.sendMail(to, subject, text);
    res.status(200).send({ id: emailId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
};
