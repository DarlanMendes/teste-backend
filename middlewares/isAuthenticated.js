
const jwt = require('jsonwebtoken')
let dotenv = require('dotenv')
//dotenv.config({path:'../../.env'})
dotenv.config()
exports.isAuthenticated= async function(req,res,next){
    let authToken = req.headers.authorization
    const[,token]= authToken.split(" ")
    
    
    if(token){
     await jwt.verify(token,process.env.JWT_SECRET,(erro,decoded)=>{
            if(decoded){
                
                req.usuario = decoded
                next()
            }
            if(erro){
                res.json(erro)
            }
            
        })
        
    }
   
   
}