var express = require('express');
var validator = require("email-validator");
var dns = require('dns');
var emailExistence = require('email-existence');
var domain = "google.com";
var result = validator.validate("test@email.com");
dns.lookup(domain, function onLookup(err, addresses, family) {
    // console.log('addresses:', addresses);
  });
emailExistence.check('protasov@rain.wtf', function(error, response){
    // console.log('res: '+response);
});

// console.log(result);

app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

var port = process.env.PORT || 5000;

app.listen(port);

console.log('Server started on port ' + port);

