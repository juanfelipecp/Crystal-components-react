const database = require('../database');

module.exports =function(){

async function listproveedores(){
    const proveedores = await database.query("SELECT * FROM proveedores");
    return  proveedores

}
async function listproveedor(id){
    const proveedores = await database.query("SELECT * FROM  proveedores   WHERE id_proveedores = ?", id);
    return  proveedores

}

async function agregarproveedores(datos){
    const proveedores = await database.query("INSERT INTO proveedores( nombre, info,link) VALUES(?,?,?)",datos);
    return  proveedores

}

async function eliminarproveedores(id){
    const proveedores = await database.query("DELETE FROM proveedores WHERE id_proveedores = ?",id);
    return  proveedores

}

async function editaproveedores(datos){
    const proveedores = await database.query("UPDATE proveedores SET nombre = ?, info = ?,link = ? WHERE id_proveedores = ?",datos);
    return  proveedores

}

return{
    listproveedores,
    listproveedor,
    eliminarproveedores,
    agregarproveedores,
    editaproveedores
}


}