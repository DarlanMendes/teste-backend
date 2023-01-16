const db = require('./db');

 const ProdutoRouter = require('./routes/Produto')
    
const express = require('express')




const app = express()
// app.use('/',ProdutoRouter)
// app.use('/', ProdutoRouter)
app.get("/",(req,res)=>{
    res.json({nome:"Darlan"})
})
app.post("/produtos",(req,res)=>{
    let a =  req;
    res.json(req.body)
})
app.listen(10000,()=>{
    console.log('Servidor rodando na porta 10000')
})