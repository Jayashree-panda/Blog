var express = require('express');

var app = express();
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('post');
});


app.get('/posts/new',(req,res)=>{
	res.render('create');
})

app.get('/posts/store',(req,res)=>{
	console.log(req.body);
	res.redirect('/');
})


module.exports = app;
