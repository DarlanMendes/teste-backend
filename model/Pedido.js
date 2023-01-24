
const Sequelize = require('sequelize');
const sequelize = require('../db');

const Usuario = require('./Usuario');

const Pedido = sequelize.define('pedido', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mesa:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        default:'RASCUNHO'
    }
})

Pedido.belongsTo(Usuario,{
    constraint:true,
    foreignKey:'idUsuario'
})

 Pedido.sync();
    
module.exports = Pedido;


