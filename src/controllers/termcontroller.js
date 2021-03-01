const database = require('../database');

exports.listarterm =async (req, res) => {
    const redes = await database.query("SELECT * FROM term");
    res.json({ redes })
};


exports.listerm =async (req, res) => {
    const { id } = req.params;
    const term = await database.query("SELECT * FROM  term   WHERE id_term = ?", [id]);
    res.json({ term })
};

exports.agregarterm =async (req, res) => {
    const { term } = req.body;
    const datos = [ term];
    await database.query("INSERT INTO term(term) VALUES(?)", datos);
    res.json({ msg: "terminos agregado" });
};

exports.eliminaterm =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM term WHERE id_term = ?", [id]);
    res.json({ msg: "terminos eliminado" });
};

exports.editarterm =async (req, res) => {
    const { id } = req.params;
    const {  imagen, nombre,link } = req.body;
    const datos = [ imagen, nombre,link, id];
    await database.query("UPDATE term SET term = ? WHERE id_term = ?", datos);
    res.json({ msg: "terminos modificado" });
};
