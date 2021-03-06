const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/skills');
const ctrlUser = require('../controllers/user');
// const ctrlAvatar = require('../controllers/avatar');
router.post('/user', ctrlUser.isAuth);
router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);
router.get('/about', ctrlAbout.getSkills);

router.get('/admin/skills')
module.exports = router;