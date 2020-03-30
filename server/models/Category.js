const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    photo: {type: mongoose.Schema.Types.String, required: true}, 
});

const category = mongoose.model('Category', categorySchema);

module.exports = category;

