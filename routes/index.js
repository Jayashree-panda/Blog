var express = require('express');
var Post=require('./../database/models/Post')
var app = express();
/* GET home page. */
app.get('/', async(req, res) =>{
	const posts=await Post.find({})
  	res.render('index',{post:post});
});



module.exports = app;
