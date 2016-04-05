require('math.scss');
// var f = require('./vendor/square.js');
var f = require('square');

$(document).ready(function(){
  $('.btn').click(function(){
    var num = $('input[type="text"]').val();
    alert(f(num));
    console.log(num);
  });
});
