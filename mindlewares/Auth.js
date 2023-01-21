let Produto = require('../model/Produto')


exports.Authentication= async function(req,res,next){
    let {role}= req.query
   console.log(role)
   next()
   
}