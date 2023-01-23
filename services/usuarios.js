const Usuario = require('../model/Usuario')
let Produto = require('../model/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//dotenv.config({path:'../../.env'})
dotenv.config()
exports.criaUsuario = async function (nome, email, password, role) {
    //Verifica se falta alguma informcaoa

    try {
        let usuario = await Usuario.findOne({ where: { email: email } })

        if (!usuario) {


            let passwordHashed = await bcrypt.hash(password, 8)

            let usuarioCriado = await Usuario.create({ nome, email, password: passwordHashed, role })

            return usuarioCriado

        }
    } catch (e) {
        return e
    }
}
exports.loginUsuario = async function (email, password) {
    //Verifica usuario e devolve token

    if (email && password) {
       
        try{
            let usuarioBanco = await Usuario.findOne({ where: { email:email } })
            return usuarioBanco
            let passwordConfere = await bcrypt.compare(password, usuarioBanco.password)
          
        if (passwordConfere) {
            // gera token
            
            const token = jwt.sign(
                {
                    nome: usuarioBanco.nome,
                    email,
                    role: usuarioBanco.role
                },
                process.env.JWT_SECRET,
                {
                    subject: usuarioBanco.id.toString(),
                    expiresIn: 60 * 60 * 3 // expira em 3 horas
                }

            )
            
            return {
                id: usuarioBanco.id,
                nome: usuarioBanco.nome,
                email: usuarioBanco.email,
                role: usuarioBanco.role,
                token
            }
        }
        }catch(e){
            return e
        }
       
        

    }

}
exports.listUsuario = async function(id_usuario){
 let usuario = await Usuario.findByPk(id_usuario)
 if(usuario){
    return {
        nome:usuario.nome,
        email:usuario.email,
        role:usuario.role
    }
 }else{
    return {erro:"Usuario inexistente"}
 }
}