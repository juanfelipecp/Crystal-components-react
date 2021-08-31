const database = require('../database');

module.exports =function(){

async function listnoticias(){
    const noticias = await database.query("SELECT * FROM noticias");
    return  noticias

}
async function listnoticia(id){
    const noticias = await database.query("SELECT * FROM  noticias   WHERE id_noticias = ?", [id]);
    return  noticias

}

async function agregarnoticias(datos){
    const noticias = await database.query("INSERT INTO noticias(titulo, descripcion,img) VALUES(?,?,?)",datos);
    return  noticias

}

async function eliminarnoticias(id){
    const contactanos = await database.query("DELETE FROM noticias WHERE id_noticias = ?",id);
    return  contactanos

}

async function editanoticias(datos){
    const contactanos = await database.query("UPDATE noticias SET titulo = ?, descripcion = ? WHERE id_noticias = ?",datos);
    return  contactanos

}

return{
    listnoticias,
    listnoticia,
    eliminarnoticias,
    agregarnoticias,
    editanoticias
}


}