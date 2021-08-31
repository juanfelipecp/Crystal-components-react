const database = require('../database');

module.exports =function(){

async function listventas(){
    const ventas = await database.query("SELECT * FROM ventas");
    return  ventas

}
async function listventa(id){
    const ventas = await database.query("SELECT *  FROM ventas   WHERE id_ventas= ?", id);
    return  ventas

}

async function agregarventas(datos){
    const ventas = await database.query("INSERT INTO ventas(mes, numero) VALUES(?,?)",datos);
    return  ventas

}

async function eliminarventas(id){
    const ventas = await database.query("DELETE FROM ventas WHERE id_ventas = ?",id);
    return  ventas

}

async function editaventas(datos){
    const ventas = await database.query("UPDATE ventas SET mes = ?, numero = ? WHERE id_ventas = ?",datos);
    return  ventas

}

return{
    listventas,
    listventa,
    eliminarventas,
    agregarventas,
    editaventas
}


}