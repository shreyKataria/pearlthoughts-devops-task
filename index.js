'use strict'

var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('This is pearl devops task !!! THis is my first automation !! HELLO SHREY lado');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(80);
  console.log('Express started on port 80');
}