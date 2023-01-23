const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtos')
const UsuarioController = require('../controllers/usuarios')
const { isAuthenticated } = require('../middlewares/isAuthenticated')


router.get('/produtos/:id',ProdutoController.getProduto)
router.get('/produtos/',ProdutoController.listProduto)
router.post('/produtos/',ProdutoController.newProduto)
router.put('/produtos/:id',ProdutoController.updateProduto)
router.post('/cadastro',UsuarioController.criaUsuario)
router.post('/login/',UsuarioController.loginUsuario)
router.get('/me',isAuthenticated,UsuarioController.listUsuario)
module.exports = router;