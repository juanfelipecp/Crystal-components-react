const database = require('../database');

module.exports =function(){

async function listm_vs(){
    const m_v = await database.query("SELECT * FROM m_v");
    return  m_v

}
async function listm_v(id){
    const m_v = await database.query("SELECT * FROM  m_v   WHERE id_mv = ?",id);
    return  m_v

}

async function agregarm_vs(datos){
    const m_v = await database.query("INSERT INTO m_v(mision, vision) VALUES(?,?)",datos);
    return  m_v

}

async function eliminarm_vs(id){
    const contactanos = await database.query("DELETE FROM m_v WHERE id_mv = ?",id);
    return  contactanos

}

async function editam_vs(datos){
    const contactanos = await database.query("UPDATE m_v SET mision = ?, vision = ? WHERE id_mv = ?",datos);
    return  contactanos

}

return{
    listm_vs,
    listm_v,
    eliminarm_vs,
    agregarm_vs,
    editam_vs
}


}