let Categoria = require('../model/Categoria')


exports.newCategoria = async function(nomeCategoria){
   // Cria um nova categoria
    try{
        let categoriaCriada = await Categoria.create({nome:nomeCategoria})
        
        return categoriaCriada
    }catch(e){
        return e
    }
}
exports.updateCategoria = async function(id,nomeCategoria){
    // Cria um nova categoria
     try{
         let categoriaCriada = await Categoria.update({nome:nomeCategoria},{where:{id}})
         
         return categoriaCriada
     }catch(e){
         return e
     }
 }

