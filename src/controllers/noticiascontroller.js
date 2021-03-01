const database = require('../database');

exports.listarnoticias =async (req, res) => {
    const noticias = await database.query("SELECT * FROM noticias");
    res.json({ noticias })
};


exports.listarnoticia =async (req, res) => {
    const { id } = req.params;
    const noticias = await database.query("SELECT * FROM  noticias   WHERE id_noticias = ?", [id]);
    res.json({ noticias })
};

exports.agregarnoticias =async (req, res) => {
    const { titulo, descripcion } = req.body;
    const datos = [titulo, descripcion];
    await database.query("INSERT INTO noticias(titulo, descripcion) VALUES(?,?)", datos);
    res.json({ msg: "noticias agregado" });
};

exports.eliminanoticias =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM noticias WHERE id_noticias = ?", [id]);
    res.json({ msg: "noticia eliminado" });
};

exports.editarnoticias =async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const datos = [titulo, descripcion, id];
    await database.query("UPDATE noticias SET titulo = ?, descripcion = ? WHERE id_noticias = ?", datos);
    res.json({ msg: "noticia modificado" });
};


