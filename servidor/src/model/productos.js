const database = require('../database');

module.exports =function(){

async function listprodutos(){
    const produtos = await database.query("SELECT * FROM productos");
    return  produtos

}
async function listproducto(id){
    const produtos = await database.query("SELECT * FROM productos WHERE id_tipos = ?",id);
    return  produtos

}

async function agregarprodutos(datos){
    const produtos = await database.query("INSERT INTO productos(nombre, descripcion, id_tipos, precio, img) VALUES(?,?,?,?,?)",datos);
    return  produtos

}

async function eliminarprodutos(id){
    console.log(id)
    const contactanos = await database.query("DELETE FROM productos WHERE id_productos = ?",id);
    return  contactanos

}

async function editaprodutos(datos){
    const contactanos = await database.query("UPDATE productos SET nombre = ?, descripcion = ?, id_tipos = ?,precio=?,img=? WHERE id_productos = ?",datos);
    return  contactanos

}

return{
    listprodutos,
    listproducto,
    eliminarprodutos,
    agregarprodutos,
    editaprodutos
}


}