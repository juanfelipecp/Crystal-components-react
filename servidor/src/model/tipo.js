const database = require('../database');

module.exports =function(){

async function listtipos(){
    const tipos = await database.query("SELECT * FROM tipos_product");
    return  tipos

}
async function listtipo(id){
    const tipos = await database.query("SELECT * FROM  tipos_product   WHERE id_tipos = ?", id);
    return  tipos

}

async function agregartipos(datos){
    const tipos = await database.query("INSERT INTO tipos_product(tipo) VALUES(?)",datos);
    return  tipos

}

async function eliminartipos(id){
    const tipos = await database.query("DELETE FROM tipos_product WHERE id_tipos = ?",id);
    return  tipos

}

async function editatipos(datos){
    const tipos = await database.query("UPDATE tipos_product SET tipo = ? WHERE id_tipos = ?",datos);
    return  tipos

}

return{
    listtipos,
    listtipo,
    eliminartipos,
    agregartipos,
    editatipos
}


}