const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtos')
const UsuarioController = require('../controllers/usuarios')
const { Authentication } = require('../mindlewares/Auth')


router.get('/produtos/:id',ProdutoController.getProduto)
router.get('/produtos/',ProdutoController.listProduto)
router.post('/produtos/',ProdutoController.newProduto)
router.put('/produtos/:id',ProdutoController.updateProduto)
router.post('/cadastro',UsuarioController.criaUsuario)
router.post('/login/',UsuarioController.loginUsuario)
module.exports = router;