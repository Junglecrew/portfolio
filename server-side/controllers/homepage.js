const http = require('request');
const config = require('../config/config.json')
// const apiOptions = {
//   server: "https://portfolio-adv.herokuapp.com"
//   // server: "http://localhost:3000"
// }


module.exports.getIndexPage = (req, res, next) => {
  res.render('index/index', {
    title: 'Авторизация',
    msg: req.query.msg
  }
);
}

module.exports.authorization = function (req, res) {
  if (!req.body.login || !req.body.password) {
    return res.redirect('/?msg=Все поля должны быть заполнены')
  }
  const pathApi = '/api/user/';
  const requestOptions = {
    url: config.server.address + pathApi,
    method: "POST",
    json: {
      login: req.body.login,
      password: req.body.password
    }
  };
  http(requestOptions, function(error, response, body){
    if (body.status === 'err') {
      return res.redirect(`/?msg=${body.message}`);
    }
    req.session.isAdmin = true;
    res.redirect('/admin')
  })
}