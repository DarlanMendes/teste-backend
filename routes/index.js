const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtos')
const UsuarioController = require('../controllers/usuarios')
const CategoriaController = require('../controllers/categoria')
const ItemController = require('../controllers/item')
const { isAuthenticated } = require('../middlewares/isAuthenticated')

// produtos rotas
router.get('/produtos/:id',ProdutoController.getProduto)
router.get('/produtos/',ProdutoController.listProduto)
router.post('/produtos/',isAuthenticated,ProdutoController.newProduto)
//{nome, preco, descricao,disponivel(default:true),idCategoria(FK)}
router.put('/produtos/:id',isAuthenticated,ProdutoController.updateProduto)

//usuarios rotas 
router.post('/cadastro',UsuarioController.criaUsuario)
//{nome, email, password, role(default:cliente)}
router.post('/login/',UsuarioController.loginUsuario)
//{email, senha}
router.get('/me',isAuthenticated,UsuarioController.listUsuario)
//usuario deve fornecer token 

// Categoria rotas
router.post('/categorias', isAuthenticated,CategoriaController.newCategoria)
//{nome}
router.put('/categorias/:id')
//{nome} params id

//items---------------

router.get('/items/:id', isAuthenticated,ItemController.listItems)
module.exports = router;