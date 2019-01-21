var express = require('express');

var app = express();
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('contact');
});

module.exports = app;
