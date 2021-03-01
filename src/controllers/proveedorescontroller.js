const database = require('../database');

exports.listarproveedores =async (req, res) => {
    const proveedores = await database.query("SELECT * FROM proveedores");
    res.json({ proveedores })
};


exports.listarproveedor =async (req, res) => {
    const { id } = req.params;
    const proveedores = await database.query("SELECT * FROM  proveedores   WHERE id_proveedores = ?", [id]);
    res.json({ proveedores })
};

exports.agregarproveedores =async (req, res) => {
    const { nombre, info,link } = req.body;
    const datos = [ nombre, info,link];
    await database.query("INSERT INTO proveedores( nombre, info,link) VALUES(?,?,?)", datos);
    res.json({ msg: "noticias agregado" });
};

exports.eliminaproveedores =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM proveedores WHERE id_proveedores = ?", [id]);
    res.json({ msg: "noticia eliminado" });
};

exports.editarproveedores =async (req, res) => {
    const { id } = req.params;
    const {  nombre, info,link } = req.body;
    const datos = [ nombre, info,link, id];
    await database.query("UPDATE proveedores SET nombre = ?, info = ?,link = ? WHERE id_proveedores = ?", datos);
    res.json({ msg: "noticia modificado" });
};
