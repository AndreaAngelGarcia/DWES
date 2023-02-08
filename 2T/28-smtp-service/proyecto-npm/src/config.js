const port = 3000;

const app = {
  port: process.env.PORT,
};

const smtp = {
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
};

module.exports = {
  port,
  app,
  smtp,
  notes: {
    folder: 'files',
    ext: 'note',
  },
};
