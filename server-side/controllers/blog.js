const http = require('request');
const config = require('../config/config.json')
// const apiOptions = {
//   server: "https://portfolio-adv.herokuapp.com"
// }

module.exports.getBlogPage = (req, res) => {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: config.server.address + pathAPI,
    method: 'GET'
  };
  let sendObj = {
    title: 'Блог'
  };
  http(requestOptions, function (error, response, body) {
    res.render('blog/blog', Object.assign(sendObj, JSON.parse(body)));
  })
}