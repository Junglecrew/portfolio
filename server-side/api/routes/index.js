const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/skills');
// const ctrlAvatar = require('../controllers/avatar');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);
router.get('/about', ctrlAbout.getSkills);
module.exports = router;