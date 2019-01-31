var express = require('express');
var Post=require('./../database/models/Post.js')
var storePost=require('./../middleware/storePost')
app.use('/posts/store',storePost)
var app = express();
/* GET home page. */
app.get('/:id', async(req, res)=> {
  const post= await Post.findById(req.params.id)
  res.render('post',{post:post})
});


app.get('/posts/new',(req,res)=>{
	res.render('create');
})

app.post('/posts/store',(req,res)=>{
	const{
		image
	}=req.files

	image.mv(path.resolve(__dirname,))
	
})


module.exports = app;
