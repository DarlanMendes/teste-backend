let ItemService = require('../services/items')


exports.listItems = async function (req, res) {
    const { id } = req.params
    let usuario = req.usuario
    console.log(usuario)
    if (usuario.role === 'gerente'||usuario.role==='cliente') {


        if (id) {
            try {
                let listaItems = await ItemService.listItems(id)
               
                res.json(listaItems)
            } catch (e) {
                res.json({ erro: e })
            }
        }
    }else{
        res.json({erro:"Operacação não autorizada"})
    }
}