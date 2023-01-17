const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtos')


router.get('/produtos/:id',ProdutoController.getProduto)
router.get('/produtos/',ProdutoController.listProduto)
router.post('/produtos/',ProdutoController.newProduto)
router.put('/produtos/:id',ProdutoController.updateProduto)
module.exports = router;