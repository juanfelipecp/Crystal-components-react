const database = require('../database');

module.exports =function(){

async function listusuarios(){
    const usuarios = await database.query("SELECT * FROM usuarios");
    return  usuarios

}
async function listusuario(id){
    const usuarios = await database.query("SELECT *  FROM usuarios WHERE id_usuarios = ?", id);
    return  usuarios

}

async function agregarusuarios(datos){
    const usuarios = await database.query("INSERT INTO usuarios(nombre, email, telefono, contrasena, id_rol,direccion) VALUES(?,?,?,?,?,?)",datos);
    return  usuarios

}

async function eliminarusuarios(id){
    const usuarios = await database.query("DELETE FROM usuarios WHERE id_usuarios = ?",id);
    return  usuarios

}

async function editausuarios(datos){
    const usuarios = await database.query("UPDATE usuarios SET nombre = ?, email = ?, telefono = ?, contrasena = ?,direccion = ? ', id_rol = ? WHERE id_usuarios = ?",datos);
    return  usuarios

}

return{
    listusuarios,
    listusuario,
    eliminarusuarios,
    agregarusuarios,
    editausuarios
}


}