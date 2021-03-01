const database = require('../database');

exports.listarprecios =async (req, res) => {
    const precios = await database.query("SELECT * FROM precios");
    res.json({ precios })
};


exports.listarprecio =async (req, res) => {
    const { id } = req.params;
    const precios = await database.query("SELECT * FROM  precios   WHERE id_precio= ?", [id]);
    res.json({ precios })
};

exports.agregarprecios =async (req, res) => {
    const { dolar, cop } = req.body;
    const datos = [dolar, cop];
    await database.query("INSERT INTO precios(dolar, cop) VALUES(?,?)", datos);
    res.json({ msg: "precios agregado" });
};

exports.eliminaprecios =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM precios WHERE id_precio = ?", [id]);
    res.json({ msg: "precios eliminado" });
};

exports.editarprecios =async (req, res) => {
    const { id } = req.params;
    const { dolar, cop } = req.body;
    const datos = [dolar, cop, id];
    await database.query("UPDATE precios SET dolar = ?, cop = ? WHERE id_precio = ?", datos);
    res.json({ msg: "precios modificado" });
};


