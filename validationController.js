const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const validator = require("email-validator");
var dns = require('dns');

router.use(bodyParser.urlencoded({ extended: false }))

// 🚀 Получение списка email
router.post('/', function(request, response) {
  
    // Получаю все данные баннера с фронта
    const emailList = request.body.email.split("\r\n");

    var approvedEmailList = [];

    for (var i = 0; i < emailList.length; i++) {
        if (validator.validate(emailList[i])) {
          var domain = emailList[i].split("@")[1]
          dns.lookup(domain, function onLookup(err, addresses, family) {
            if (addresses) {
              approvedEmailList.push(domain)
            }
          }); 
        }
    }
  
    response.json(approvedEmailList);
  
  });

  module.exports = router;