let Produto = require('../model/sequelizeModel')

exports.getProduto = async function(id){
    try{
        let produto = await Produto.find({where:{id:id}})
        return produto
    }catch(e){
        throw Error('error', e)
    }
}
exports.newProduto = async function(produtoNovo){
    try{
        let produtoCriado = await Produto.create(produtoNovo)
        console.log(produtoNovo)
        return produtoCriado
    }catch(e){
        throw Error('error', e)
    }
}