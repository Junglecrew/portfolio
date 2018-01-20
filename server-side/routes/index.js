var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');
const ctrlWork= require('../controllers/work');
const ctrlAdmin= require('../controllers/admin');
const ctrlLogin= require('../controllers/login');

const isAdmin = (req, res, next) => {
	if (req.session.isAdmin){
		return next();
	} else {
		res.redirect('/')
	}
}

/* Получаем страницы*/
router.get('/', ctrlHome.getIndexPage);

// router.get('/login', ctrlLogin.getLoginPage);
router.post('/login', ctrlHome.authorization);

router.get('/about', ctrlAbout.getAboutPage);

router.get('/blog', ctrlBlog.getBlogPage);

router.get('/work', ctrlWork.getWorkPage );
router.post('/work/contact', ctrlWork.sendEmail);

router.get('/admin', isAdmin, ctrlAdmin.getAdminPage );
router.post('/admin/blog', isAdmin, ctrlAdmin.addArticle );
// router.get('/admin/skills', ctrlAdmin.getAdminSkillsPage);

module.exports = router;
