//let Produto = require('../model/sequelizeModel');
let ProdutoService =require('../services/produtos')

exports.getProduto = async function(req, res){
        const {id}= req.params
        
        if(id){
            try{
                let produto = await ProdutoService(id)
                res.json(produto)
            }catch(e){
                throw Error('error:',e)
            }
        }
}
exports.newProduto = async function(req, res){
    const teste= res.query

    // let produtoNovo={
    //     nome,
    //     preco,
    //     descricao
    // }
    console.log(teste)
    // if(produtoNovo){
    //     try{
    //         let produtoCriado = await ProdutoService(produtoNovo)
    //         res.json(produtoCriado)
    //     }catch(e){
    //         throw Error('error:',e)
    //     }
    // }
}
