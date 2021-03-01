const database = require('../database');

exports.listarredes =async (req, res) => {
    const redes = await database.query("SELECT * FROM redes");
    res.json({ redes })
};


exports.listared =async (req, res) => {
    const { id } = req.params;
    const redes = await database.query("SELECT * FROM  redes   WHERE id_redes = ?", [id]);
    res.json({ redes })
};

exports.agregarredes =async (req, res) => {
    const { imagen, nombre,link } = req.body;
    const datos = [ imagen, nombre,link];
    await database.query("INSERT INTO redes( imagen, nombre,link) VALUES(?,?,?)", datos);
    res.json({ msg: "redes agregado" });
};

exports.eliminaredes =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM redes WHERE id_redes = ?", [id]);
    res.json({ msg: "redes eliminado" });
};

exports.editarredes =async (req, res) => {
    const { id } = req.params;
    const {  imagen, nombre,link } = req.body;
    const datos = [ imagen, nombre,link, id];
    await database.query("UPDATE redes SET imagen = ?, nombre = ?,link = ? WHERE id_redes = ?", datos);
    res.json({ msg: "redes modificado" });
};
