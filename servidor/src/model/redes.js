const database = require('../database');

module.exports =function(){

async function listredes(){
    const redes = await database.query("SELECT * FROM redes");
    return  redes

}
async function listred(id){
    const redes = await database.query("SELECT * FROM  redes   WHERE id_redes = ?", id);
    return  redes

}

async function agregarredes(datos){
    const redes = await database.query("INSERT INTO redes( imagen, nombre,link) VALUES(?,?,?)",datos);
    return  redes

}

async function eliminarredes(id){
    const redes = await database.query("DELETE FROM redes WHERE id_redes = ?",id);
    return  redes

}

async function editaredes(datos){
    const redes = await database.query("UPDATE redes SET imagen = ?, nombre = ?,link = ? WHERE id_redes = ?",datos);
    return  redes

}

return{
    listredes,
    listred,
    eliminarredes,
    agregarredes,
    editaredes
}


}