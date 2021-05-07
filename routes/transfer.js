var express = require('express');
const { where } = require('sequelize');
var router = express.Router();
const db = require('../config/database');
const Customer = require('../models/Customer');

/* GET transfer page. */
router.get('/', function(req, res) {
  Customer.findAll({
    attributes: ['Name']
  })
  .then(Customer => {
    res.render('transfer',{
      Customer
    });
  })
  .catch(err=> console.log(err))
});


router.post('/', async (req, res)=> {
  try{
    sender = req.body.sender;
    receiver = req.body.receiver;
    transferBalance = req.body.balance;

    const senderUser = await Customer.findOne( {where: {PhNo: sender} });
    const receiverUser = await Customer.findOne({ where: {PhNo: receiver} });
    const updateReceiver = parseInt(receiverUser.CurrentBalance) + parseInt(transferBalance);
    const updateSender = parseInt(senderUser.CurrentBalance) - parseInt(transferBalance);
    console.log(updateReceiver);

    var values = {CurrentBalance: updateReceiver};
    var selector = {
      where: {PhNo : receiver}
    };
    var update ={CurrentBalance: updateSender};
    var upselector = {
      where: {PhNo : sender}
    };

    // await Customer.update({PhNo : receiver}, {CurrentBalance: updateReceiver});
    await Customer.update(values, selector);
    // await Customer.update({PhNo : sender}, {CurrentBalance: updateSender});
    await Customer.update(update,upselector);

    res.render("transfer" , {title:'Success!' , success:'Transaction Successfull' , check:'true'});
  }
  catch(err){
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
