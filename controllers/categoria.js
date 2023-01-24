
let CategoriaService = require('../services/categorias')


exports.newCategoria = async function (req, res) {
    const { nome } = req.body
    let usuario = req.usuario
    console.log(usuario)
    if (usuario.role === 'gerente') {


        if (nome) {
            try {
                let categoriaCriada = await CategoriaService.newCategoria(nome)
                console.log(categoriaCriada, 'cat criada')
                res.json(categoriaCriada)
            } catch (e) {
                res.json({ erro: e })
            }
        }
    }else{
        res.json({erro:"Operacação autorizada apenas para gerente"})
    }
}
exports.updateCategoria = async function (req, res) {
    const {nome} = req.body
    const{id} = req.params
    let usuario = req.usuario
    
    if (usuario.role === 'gerente') {


        if (id&&nome) {
            try {
                let categoriaAtualizada= await CategoriaService.updateCategoria(id, nome)
                console.log(categoriaAtualizada, 'cat criada')
                res.json(categoriaAtualizada)
            } catch (e) {
                res.json({ erro: e })
            }
        }else{
            res.json({erro:'é necessário que informe nome e id'})
        }
    }else{
        res.json({erro:"Operacação autorizada apenas para gerente"})
    }
}
