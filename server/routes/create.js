const router = require('express').Router();
const createController = require('../controllers/create');
const isAuth = require('../middleware/auth');

router.post('/createCategory', createController.createCategory);
router.post('/addPost', createController.createPost);
router.get('/deletePost/:id', createController.deletePost);

module.exports = router;