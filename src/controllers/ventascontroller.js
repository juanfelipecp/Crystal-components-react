const database = require('../database');

exports.listarventas =async (req, res) => {
    const ventas = await database.query("SELECT * FROM ventas");
    res.json({ ventas })
};


exports.listarventa =async (req, res) => {
    const { id } = req.params;
    const ventas = await database.query("SELECT * FROM  ventas   WHERE id_ventas= ?", [id]);
    res.json({ ventas })
};

exports.agregarventas =async (req, res) => {
    const { mes, numero  } = req.body;
    const datos = [mes, numero];
    await database.query("INSERT INTO ventas(mes, numero) VALUES(?,?)", datos);
    res.json({ msg: "ventas agregado" });
};

exports.eliminaventas =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM ventas WHERE id_ventas = ?", [id]);
    res.json({ msg: "ventas eliminado" });
};

exports.editarventas =async (req, res) => {
    const { id } = req.params;
    const { mes, numero } = req.body;
    const datos = [mes,numero, id];
    await database.query("UPDATE ventas SET mes = ?, numero = ? WHERE id_ventas = ?", datos);
    res.json({ msg: "ventas modificado" });
};


