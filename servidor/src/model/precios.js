const database = require('../database');

module.exports =function(){

async function listprecios(){
    const precios = await database.query("SELECT * FROM precios");
    return  precios

}
async function listprecio(id){
    const precios = await database.query("SELECT * FROM  precios   WHERE id_precio= ?", [id]);
    return  precios

}

async function agregarprecios(datos){
    const precios = await database.query("INSERT INTO precios(dolar, cop) VALUES(?,?)",datos);
    return  precios

}

async function eliminarprecios(id){
    const contactanos = await database.query("DELETE FROM precios WHERE id_precio = ?",id);
    return  contactanos

}

async function editaprecios(datos){
    const contactanos = await database.query("UPDATE precios SET dolar = ?, cop = ? WHERE id_precio = ?",datos);
    return  contactanos

}

return{
    listprecios,
    listprecio,
    eliminarprecios,
    agregarprecios,
    editaprecios
}


}