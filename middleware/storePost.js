module.exports=(req,res,next)=>{
	if(!req.file.image|| !req.body.title || !req.body.content ||!req.body.description || !req.body.username)
	{
		return res.redirect('/post/posts/new')
	}
	next()
}