const http = require('request');

const apiOptions = {
  server: "https://portfolio-adv.herokuapp.com"
}


module.exports.getAdminPage = (req, res, next) => {
  res.render('admin/admin');
}

module.exports.addArticle = (req, res) => {
  const pathApi = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathApi,
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