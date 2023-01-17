require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.LOGIN_POSTGRES, {dialect: 'postgres'});

module.exports = sequelize;
        

 