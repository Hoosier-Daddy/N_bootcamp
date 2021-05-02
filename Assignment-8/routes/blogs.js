const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


//Display all blogs
router.get('/', async (req, res) => {

    let blogs = await Blog.find();
    // console.log(blogs);
    res.render('home', { blogs });

})

//Form to create new blog
router.get('/new', (req, res) => {

    res.render('new');
})

//Creates new blog on server
router.post('/', async (req, res) => {
    await Blog.create(req.body.blog);
    res.redirect('/');
})

//Show deatils of a blog
router.get('/:id', async (req, res) => {

    const blog = await Blog.findById(req.params.id);
    res.render('show', { blog })
})

//Form to edit a specific blog
router.get('/:id/edit', async (req, res) => {

    const blog = await Blog.findById(req.params.id);
    res.render('edit', { blog });
})

//Udate specific comment on the server
router.patch('/:id', async (req, res) => {

    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    res.redirect(`/blogs/${req.params.id}`);
})


//Delete a blog
router.delete('/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/');
})


module.exports = router;