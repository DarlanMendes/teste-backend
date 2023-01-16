const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:dedsondarlan@gmail.com@localhost:5432/crud', {dialect: 'postgres'});

module.exports = sequelize;
        

 