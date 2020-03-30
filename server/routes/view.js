const router = require('express').Router();
const viewController = require('../controllers/view');

router.get('/allCategories', viewController.viewAllCategories);
router.get('/allPosts/:id', viewController.viewAllposts);
router.get('/details/:id', viewController.viewDetails);
router.get('/myPosts/:id', viewController.viewMyPosts);
router.get('/addToFavourites/:recipeId/:userId', viewController.addPost);
router.get('/favouritePosts/:id', viewController.viewFavouritePosts);
router.get('/removeRecipe/:recipeId/:userId', viewController.removePost);


module.exports = router;