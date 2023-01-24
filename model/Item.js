const Sequelize = require('sequelize');
const sequelize = require('../db');
const Pedido = require('./Pedido')
const Produto = require('./Produto')


const Item = sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
   quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})
Item.belongsTo(Produto,{
    constraint:true,
    foreignKey:'idProduto'
})
Item.belongsTo(Pedido,{
    constraint:true,
    foreignKey:'idPedido'
})

 Item.sync();
    
module.exports = Item;
