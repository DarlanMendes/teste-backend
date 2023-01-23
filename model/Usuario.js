//criar a tabela para clientes

const Sequelize = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('usuario', {
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
    email:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
    },
    role:{
        type:Sequelize.STRING,
        defaultValue:'cliente'
    }

})
Usuario.sync({forces:true});
    
module.exports = Usuario;

 
