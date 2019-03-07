const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

const validationController = require('./validationController');
app.use('/validation', validationController);

app.get('/', function (req, res) {
    res.render('index', {
      title: 'Sensei email checker',
      message: 'Sensei email checker',
    })
  })
  
  module.exports = app;