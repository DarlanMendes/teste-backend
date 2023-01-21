const db = require('./db');

 const Router = require('./routes')
  
const express = require('express')
var cors = require('cors')



const app = express()
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Olá mundo")
})
app.use(express.json())
app.use('/',Router)


app.listen(10000,()=>{
    console.log('Servidor rodando na porta 10000')
})