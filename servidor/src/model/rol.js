const database = require('../database');

module.exports =function(){

async function listroles(){
    const roles = await database.query("SELECT * FROM rol");
    return  roles

}
async function listrol(id){
    const roles = await database.query("SELECT * FROM  rol   WHERE id_rol = ?", id);
    return  roles

}

async function agregarroles(datos){
    const roles = await database.query("INSERT INTO rol(rol) VALUES(?)",datos);
    return  roles

}

async function eliminarroles(id){
    const roles = await database.query("DELETE FROM rol WHERE id_rol = ?",id);
    return  roles

}

async function editaroles(datos){
    const roles = await database.query("UPDATE rol SET rol = ? WHERE id_rol = ?",datos);
    return  roles

}

return{
    listroles,
    listrol,
    eliminarroles,
    agregarroles,
    editaroles
}


}