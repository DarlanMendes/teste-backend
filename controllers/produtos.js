//let Produto = require('../model/sequelizeModel');
let ProdutoService = require('../services/produtos')

exports.getProduto = async function (req, res) {
    const { id } = req.params

    if (id) {
        try {
            let produto = await ProdutoService.getProduto(id)
            res.json(produto)
        } catch (e) {
            res.json({ erro: e })
        }
    }
}
exports.listProduto = async function (req, res) {
    let { ordem, sentido } = req.query

    try {
        let listaDeProdutos = await ProdutoService.listProduto(ordem, sentido)
        res.json(listaDeProdutos)
    } catch (e) {
        res.json({ erro: e })
    }
}
exports.newProduto = async function (req, res) {
    const { nome, preco, descricao, imagem ,idCategoria} = req.body
    const usuario = req.usuario
    let produtoNovo = {
        nome,
        preco: Number(preco),
        descricao,
        imagem,
        idCategoria
    }
    if (usuario.role === 'gerente') {
        if (produtoNovo) {
            try {

                let produtoCriado = await ProdutoService.newProduto(produtoNovo)
                res.json(produtoCriado)
            } catch (e) {
                res.json({ erro: e })
            }
        }
    } else {
        res.json({ erro: 'apenas pessoas autorizadas podem criar produto' })
    }

}
exports.updateProduto = async function (req, res) {
    const { id } = req.params
    const { nome, preco, descricao } = req.body
    const usuario = req.usuario
    if (usuario.role === 'gerente') {
        if (nome || preco || descricao) {
            try {
                let produtoAtualizado = await ProdutoService.updateProduto(id, nome, preco, descricao)
                res.json(produtoAtualizado)
            } catch (e) {
                res.json(e)
            }
        }
    } else {
        res.json({ erro: 'apenas pessoas autorizadas podem realizar essa operação ' })
    }
}