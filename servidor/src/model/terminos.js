const database = require('../database');

module.exports =function(){

async function listterms(){
    const terms = await database.query("SELECT * FROM term");
    return  terms

}
async function listterm(id){
    const terms = await database.query("SELECT * FROM  term   WHERE id_term = ?", id);
    return  terms

}

async function agregarterms(datos){
    const terms = await database.query("INSERT INTO term(term) VALUES(?)",datos);
    return  terms

}

async function eliminarterms(id){
    const terms = await database.query("DELETE FROM term WHERE id_term = ?",id);
    return  terms

}

async function editaterms(datos){
    const terms = await database.query("UPDATE term SET term = ? WHERE id_term = ?",datos);
    return  terms

}

return{
    listterms,
    listterm,
    eliminarterms,
    agregarterms,
    editaterms
}


}