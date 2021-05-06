const Sequelize = require('sequelize');
const db = require('../config/database');

const Customer = db.define('Customer',{
    Name: {
        type: Sequelize.STRING
    },
    Age: {
        type: Sequelize.INTEGER
    },
    Email: {
        type: Sequelize.STRING
    },
    CurrentBalance: {
        type: Sequelize.INTEGER
    },
    PhNo: {
        type: Sequelize.INTEGER
    }
})

module.exports = Customer;