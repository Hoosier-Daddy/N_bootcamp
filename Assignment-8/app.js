const express = require('express');
const mongoose = require('mongoose');
const blogs = require('./routes/blogs');
const seedDB = require('./seed');
const methodOverride = require('method-override');

const app = express();



mongoose.connect('mongodb://localhost:27017/blogApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    }).catch(err => {
        console.log(err);
    })

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use('/blogs', blogs);

// seedDB();

app.get('/', (req, res) => {

    res.redirect('/blogs');
});




app.listen(3000, () => {

    console.log("express server is running");
})