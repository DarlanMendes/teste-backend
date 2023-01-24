
const Sequelize = require('sequelize');
const sequelize = require('../db');
const Categoria = require('./Categoria')


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
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull: false,
    },
    imagem:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    disponivel:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
    }

})
Produto.belongsTo(Categoria, {
    constraint: true,
    foreignKey: 'idCategoria'
})


 Produto.sync({force:true});
    
module.exports = Produto;

 //Relação entre Produto e Categoria é de N produtos podem tem 1 categoria N:1

//Fazer a relação aqui

