const database = require('../database');

module.exports =function(){

async function listcontactanos(){

    const contactanos = await database.query("SELECT * FROM contactanos");
    return  contactanos

}
async function listcontacto(id){
    const contactanos = await database.query("SELECT * FROM contactanos WHERE id_contactanos = ?",id);
    return  contactanos

}

async function agregarcontactos(datos){
    const contactanos = await database.query("INSERT INTO contactanos(email,pregunta) VALUES(?,?)",datos);
    return  contactanos

}

async function eliminarcontactos(id){
    const contactanos = await database.query("DELETE FROM contactanos WHERE id_contactanos = ?",id);
    return  contactanos

}

async function editarcontactos(datos){
    const contactanos = await database.query("UPDATE contactanos SET email = ?,  pregunta = ? WHERE id_contactanos = ?",datos);
    return  contactanos

}

return{
    listcontactanos,
    listcontacto,
    eliminarcontactos,
    agregarcontactos,
    editarcontactos
}


}