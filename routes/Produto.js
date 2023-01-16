const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtos')


router.get('/produtos/:id',ProdutoController.getProduto)
router.post('/produtos/',ProdutoController.newProduto)
module.exports = router;