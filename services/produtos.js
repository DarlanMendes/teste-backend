let Produto = require('../model/sequelizeModel')

exports.getProduto = async function(id){
    //procura elemento pela primary key
    try{
        let produto = await Produto.findByPk(id)
        return produto
    }catch(e){
        return e
    }
}
exports.listProduto = async function(ordem,sentido){
    console.log(ordem,sentido,'teste')
    try{
        if(ordem,sentido){
            let listaDeProdutos = await Produto.findAll({order:[[`${ordem}`,`${sentido}`]]})
        return listaDeProdutos
        }
        let listaDeProdutos = await Produto.findAll({order:[['nome','ASC']]})
        return listaDeProdutos
    }catch(e){
        return e
    }
}
exports.newProduto = async function(produtoNovo){
   // Cria um novo produto
    try{
        let produtoCriado = await Produto.create(produtoNovo)
        console.log(produtoNovo)
        return produtoCriado
    }catch(e){
        return e
    }
}

exports.updateProduto = async function(id,nome,preco,descricao){
    try{
        let produtoAtualizadoComSucesso = await Produto.update({nome,preco,descricao},{where:{id}})
        return produtoAtualizadoComSucesso
    }
    catch(e){
        return e
    }
}