//let Produto = require('../model/sequelizeModel');
let UsuarioService =require('../services/usuarios')

exports.criaUsuario = async function(req, res){
        const {nome,email,password,role}= req.body
      
        if(!email||email.length<6){
            res.json({erro:"email inválido"})
        }
        if(!nome){
            res.json({erro:"O usuário deve fornecer o nome"})
        }
            try{
                let criaUsuario = await UsuarioService.criaUsuario(nome,email.toLowerCase(),password,role)
                
                res.json(criaUsuario)
               
            }catch(e){
                res.json({erro:e})
            }
        
}
exports.loginUsuario = async function(req, res){
    const{ email, password}= req.body
   
    if(email.length>6&&password){
            try{
                
                let usuarioLogado = await UsuarioService.loginUsuario(email,password)
                
                if(usuarioLogado){
                 res.json(usuarioLogado)
                }
               
            }catch(e){
                res.json({erro:e})
            }
           
           
       
       
    }
}
exports.listUsuario = async function (req,res){
    let {usuario}=req
   let usuarioLogado = await UsuarioService.listUsuario(usuario.id)
    if(usuarioLogado){
        res.json(usuario)
    }else{
        res.json({erro:'usuario invalido'})
    }
    
}