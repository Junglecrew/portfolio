const nodemailer = require('nodemailer');
const config = require('../config/config.json')

module.exports.getWorkPage = (req, res, next) => {
  res.render('work/work');
}

module.exports.sendEmail = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.text) {
    return res.redirect('?msg=Необходимо заполнить все поля');
  }
  const transporter = nodemailer.createTransport(config.mail.smtp)
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req
      .body
      .text
      .trim()
      .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.redirect('/?msg=При отправке письма произошла ошибка: ' + error.message);
    }
    res.redirect('/?msg=Письмо успешно отправлено');
  });
}