var express = require('express');
var app = express();

app.listen(8000, function () {
  app.use(express.static('.'));
});
console.log('server is running on localhost port 8000.');
