
const Sequelize = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})
 //Produto.sync();
    
module.exports = Produto;

 
