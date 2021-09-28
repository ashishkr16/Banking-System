const Sequelize = require('sequelize');
module.exports = new Sequelize('bjjyso0xmhmdimi90fmy', 'ulfnorb6ywwesy5m', '3qq9mtMD50P6Jmf2em1j',{
  host: 'bjjyso0xmhmdimi90fmy-mysql.services.clever-cloud.com',
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
