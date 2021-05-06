var express = require('express');
var router = express.Router();
const db = require('../config/database');
const Customer = require('../models/Customer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Customer.findAll({
    attributes: ['Name', 'Age', 'Email', 'CurrentBalance','PhNo']
  })
    .then(Customer => {
      res.render('users',{
        Customer
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
