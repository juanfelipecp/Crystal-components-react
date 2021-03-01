const database = require('../database');

exports.listartipros =async (req, res) => {
    const tipos_product = await database.query("SELECT * FROM tipos_product");
    res.json({ tipos_product })
};


exports.listartipro =async (req, res) => {
    const { id } = req.params;
    const tipos_product = await database.query("SELECT * FROM  tipos_product   WHERE id_tipos = ?", [id]);
    res.json({ tipos_product })
};

exports.agregartipros =async (req, res) => {
    const { tipo } = req.body;
    const datos = [tipo];
    await database.query("INSERT INTO tipos_product(tipo) VALUES(?)", datos);
    res.json({ msg: "tipos_product agregado" });
};

exports.eliminatipros =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM tipos_product WHERE id_tipos = ?", [id]);
    res.json({ msg: "tipos_product eliminado" });
};

exports.editartipros =async (req, res) => {
    const { id } = req.params;
    const { tipo } = req.body;
    const datos = [tipo, id];
    await database.query("UPDATE tipos_product SET tipo = ? WHERE id_tipos = ?", datos);
    res.json({ msg: "tipos_product modificado" });
};


