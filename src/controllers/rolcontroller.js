const database = require('../database');

exports.listarrols =async (req, res) => {
    const rol = await database.query("SELECT * FROM rol");
    res.json({ rol })
};


exports.listartirol =async (req, res) => {
    const { id } = req.params;
    const rol = await database.query("SELECT * FROM  rol   WHERE id_rol = ?", [id]);
    res.json({ rol })
};

exports.agregarrol =async (req, res) => {
    const { rol } = req.body;
    const datos = [rol];
    await database.query("INSERT INTO rol(rol) VALUES(?)", datos);
    res.json({ msg: "rol agregado" });
};

exports.eliminarol =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM rol WHERE id_rol = ?", [id]);
    res.json({ msg: "rol eliminado" });
};

exports.editarrol =async (req, res) => {
    const { id } = req.params;
    const { rol } = req.body;
    const datos = [rol, id];
    await database.query("UPDATE rol SET rol = ? WHERE id_rol = ?", datos);
    res.json({ msg: "rol modificado" });
};


