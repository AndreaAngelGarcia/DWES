const smtpService = require('../services/smtp-service');

async function createMail(req, res, next) {
  try {
    const content = {
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
    };
    const emailId = await smtpService.sendMail(content);
    res.status(200).send({ id: emailId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
};
