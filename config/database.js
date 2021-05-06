const Sequelize = require('sequelize');
module.exports = new Sequelize('Banking_System', 'loneranger', 'ashish',{
  host: 'localhost',
  dialect: 'mysql',

  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define:{
    timestamps: false
  }
});
