const User = require('../models/User');
const Category = require('../models/Category');
const Post = require('../models/Post');

module.exports = {
  viewAllCategories: (req, res, next) => {
    Category.find()
      .then((categories) => {
        res
          .status(200)
          .json(categories);
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

 

  viewAllposts: async (req, res, next) => {
    const {id} = req.params;
    let posts = [];

    try{
    let category = await Category.findById(id);
    for(let postId of category.posts) {
      let post = await Post.findById(postId);
      if(post !== null) {
      posts.push(post);
      }
    }
    res.status(200)
        .json({message: `Loaded all ${category.name} posts!`, posts, categoryName: category.name})
  } catch(err) {
    console.log(err);
    next(err);
  } },

  viewDetails: async (req, res, next) => {
    const { id } = req.params;

    try{
      let post = await Post.findById(id).populate('category');
      res.status(200).json({message: "Loaded successfully", post})
    } catch(err) {
      console.log(err);
      next(err);
    }
  },


  addPost: async (req, res, next) => {
    const { postId, userId } = req.params;
    console.log(req.params)
    console.log('here')
    let user = await User.findById(userId);
    let post = await Post.findById(postId);

    if (user.myPosts.indexOf(post._id) <= -1) {
      user.myPosts.push(post);
      res.status(201).json({message: "Post added to list successfully!"})
    } else {
      res.status(500).json({message: "Post already added to your favourites!"})
    }
    user.save();
  },

   viewMyPosts: async (req, res, next) => {
    const {id} = req.params;
    console.log(id)
    let user = await User.findById(id);
    let posts = [];
    console.log(user)
    for(let postId of user.createdPosts) {
      console.log(postId)
     let currentPost = await Post.findById(postId);
     posts.push(currentPost);
    }

    res.status(200)
      .json({message: "Loaded all posts! :) ", posts})
  }, 

  viewFavouritePosts: async (req, res, next) => {
    const {id} = req.params;
    console.log(id)
    let user = await User.findById(id);
    let posts = [];
    console.log(user)
    for(let postId of user.myPosts) {
      console.log(postId)
     let currentPost = await Post.findById(postId);
     posts.push(currentPost);
    }

    res.status(
      200)
      .json({message: "Loaded all posts! :) ", posts})
  },

  removePost: async (req, res, next) => {
    const {postId, userId} = req.params;

    let user = await User.findById(userId);

    user.myPosts.pull(postId)
     await user.save();
      console.log('Post removed!!')
    

    res.status(200)
    .json({message: "Post removed successfully!", posts: user.myPosts})
  }
}