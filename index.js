const db = require('./db');

 const ProdutoRouter = require('./routes/Produto')
    
const express = require('express')




const app = express()

app.use(express.json())
app.use('/',ProdutoRouter)
app.use('/', ProdutoRouter)

app.listen(10000,()=>{
    console.log('Servidor rodando na porta 10000')
})