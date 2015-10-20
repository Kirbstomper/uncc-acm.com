/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));
app.get('/chrissmith',function (req, res) {
  res.end('Heyo from chris!');
});
app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.listen(3000);
