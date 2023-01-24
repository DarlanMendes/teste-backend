let Item = require('../model/Item')

exports.listItems = async function(id){
    //procura elemento pela primary key
    try{
        let items = await item.findByPk(id)
        //console.log(produto)
        return items
    }catch(e){
        return e
    }
}
