
const Sequelize = require('sequelize');
const sequelize = require('../db');

const Categoria = sequelize.define('categorias', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 Categoria.sync();
    
module.exports = Categoria;
