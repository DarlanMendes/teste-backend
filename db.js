const dotenv = require('dotenv');
//dotenv.config({path:'../.env'})
dotenv.config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.LOGIN_POSTGRES, {dialect: 'postgres'});

sequelize.authenticate().then(()=>{
    console.log("Conexao realizada com sucesso")
}).catch((e)=>{
    console.log(e, 'erro ao se conectar')
})
module.exports = sequelize;
        

 