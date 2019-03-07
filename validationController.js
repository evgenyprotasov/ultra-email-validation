const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const validator = require("email-validator");
const dnsSync = require('dns-sync');
const emailExistence = require('email-existence');
const emailExists = require('email-exists')
const dns = require('dns');

router.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }))

// Get email list from form
router.post('/', function(request, response) {

    response.setHeader('Content-Type', 'text/html');
  
    // Form data
    const emailList = request.body.email.split("\r\n");

    var approvedEmailList = [];

    for (var i = 0; i < emailList.length; i++) {
      // Email maask validation
      if (validator.validate(emailList[i])) {

        var domain = emailList[i];
        domain = domain.split("@")[1]
        
        // Check domain available (dns record is exist)
        if (dnsSync.resolve(domain)) {
          // DEV
          console.log(`Email ${emailList[i]} is ok, ${emailList.length - i} left.`);

          // Adding email to array (for dev purpose)
          approvedEmailList.push(emailList[i]);
          // Adding email string to resposnse
          response.write(`${emailList[i]}</br>`);
        }
      }
    };

    console.log(approvedEmailList.length);
    response.end();
  
  });

  module.exports = router;