var express = require('express');

var app = express();
/* GET home page. */
app.get('/', (req, res, next) =>{
  res.render('index');
});



module.exports = app;
