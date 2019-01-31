var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload=require("express-fileupload")
var index = require('./routes/index');
var about = require('./routes/about');
var contact=require('./routes/contact');
var post=require('./routes/post');
//const mongoose=require('mongoose');

var app = express();

//mongoose.connect('mongodb://localhost:27017/blognode',{useNewUrlParser:true})
//.then(()=>("You are connected to mongo!"))
//.catch(err=>{console.error("error detected",err)})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('ejs', require('express-ejs-extend'));
app.use(fileUpload())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/about', about);
app.use('/contact',contact);
app.use('/post', post);
app.use('/index', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
