const http = require('request');
const config = require('../config/config.json')
// const apiOptions = {
//   server: "https://portfolio-adv.herokuapp.com"
// }


// module.exports.getAdminPage = (req, res, next) => {
//   res.render('admin/admin');
// }


module.exports.getAdminPage = (req, res) => {
  //Выводим все статьи в админку
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: config.server.address + pathAPI,
    method: 'GET'
  };
  let sendObj = {
    title: 'Страница Администрирования'
  };
  http(requestOptions, function (error, response, body) {
    res.render('admin/admin', Object.assign(sendObj, JSON.parse(body)));
  })
}

module.exports.addArticle = (req, res) => {
  const pathApi = '/api/blog';
  const requestOptions = {
    url: config.server.address + pathApi,
    method: "POST",
    json: {
      title: req.body.title,
      date: req.body.date,
      text: req.body.text
    }
  };

  http(requestOptions, function (error, response, body) {
    res.redirect('/');
  });
}


// module.exports.getAdminSkillsPage = (req, res, next) => {
//   const pathAPI = '/api/blog';
//   const requestOptions = {
//     url: apiOptions.server + pathAPI,
//     method: 'GET'
//   };
//   let sendObj = {
//     title: 'Блог'
//   };
//   http(requestOptions, function (error, response, body) {
//     res.render('blog/blog', Object.assign(sendObj, JSON.parse(body)));
//   })
// }