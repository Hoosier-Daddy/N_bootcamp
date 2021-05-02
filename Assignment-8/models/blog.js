const mongoose = require('mongoose');

const blogSchema = {

    title: String,
    author: String,
    description: String
};


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;