
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
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    descricao:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    imagem:{
        type:Sequelize.STRING,
        allowNull:false
    },
    disponivel:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
    }

})
 Produto.sync();
    
module.exports = Produto;

 //Relação entre Produto e Categoria é de N produtos podem tem 1 categoria N:1

//Fazer a relação aqui

