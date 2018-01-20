// module.exports.getAboutPage = (req, res, next) => {
//   res.render('about/about');
// }

const http = require('request');
const config = require('../config/config.json')
// const apiOptions = {
//   server: "https://portfolio-adv.herokuapp.com"
// }


module.exports.getAboutPage = (req, res) => {
  const pathAPI = '/api/about';
  const requestOptions = {
    url: config.server.address + pathAPI,
    method: 'GET'
  };
  let sendObj = {
    title: 'Обо мне'
  };
  http(requestOptions, function (error, response, body) {
    res.render('about/about', Object.assign(sendObj, JSON.parse(body)));
  })
}