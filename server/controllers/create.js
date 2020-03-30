const Category = require('../models/Category');
const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {
    createCategory: (req, res, next) => {
        const category = req.body;

        Category.create(category)
            .then((category) => {
                res.status(200)
                    .json({
                        message: `Category ${category.name} created successfully!`,
                        category
                    })
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500
                }

                next(err);
            })
    },


    createPost: async (req, res, next) => {
        let post = req.body;
        console.log(post)
        let category =  await Category.findOne({"name":post.category})
        post.category = category._id;
        let creator = await User.findById(post.creator);

        Post.create(post)
            .then(async (post) => {        
                await category.posts.push(post);
                category.save();

                await creator.createdPosts.push(post._id);
                creator.save();

                res.status(200)
                    .json({
                        message: `Post ${post.name} created successfully!`,
                        post
                    })
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500
                }

                next(err);
            })
    },

    deletePost: (req, res, next) => {
        const { id } = req.params;

        Post.findByIdAndRemove(id)
                .then((post) => {
                    res.status(200).json({message: 'Post deleted successfully!'})
                }).catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500
                    }
    
                    next(err);
                })
    }
}