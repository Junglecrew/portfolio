var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage')
const ctrlBlog = require('../controllers/blog')
const ctrlAbout = require('../controllers/about')
const ctrlWork= require('../controllers/work')
const ctrlAdmin= require('../controllers/admin')

/* Получаем страницы*/
router.get('/', ctrlHome.getIndexPage);

router.get('/about', ctrlAbout.getAboutPage);

router.get('/blog', ctrlBlog.getBlogPage);

router.get('/work', ctrlWork.getWorkPage );
router.post('/work/contact', ctrlWork.sendEmail);

router.get('/admin', ctrlAdmin.getAdminPage );
router.post('/admin/blog', ctrlAdmin.addArticle );

module.exports = router;
