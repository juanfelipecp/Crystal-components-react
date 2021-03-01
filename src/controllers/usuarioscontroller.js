const database = require('../database');

exports.listarusuarios =async (req, res) => {
    const usuarios = await database.query("SELECT * FROM usuarios");
    res.json({ usuarios })
};


exports.listarusuario =async (req, res) => {
    const { id } = req.params;
    const usuario = await database.query("SELECT * FROM usuarios WHERE id_usuarios = ?", [id]);
    res.json({ usuario })
};

exports.agregarusuario =async (req, res) => {
    const { nombre, email, telefono, contrasena, id_rol } = req.body;
    const datos = [nombre, email, telefono, contrasena, id_rol];
    await database.query("INSERT INTO usuarios(nombre, email, telefono, contrasena, id_rol) VALUES(?,?,?,?,?)", datos);
    res.json({ msg: "usuario agregado" });
};

exports.eliminausuario =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM usuarios WHERE id_usuarios = ?", [id]);
    res.json({ msg: "usuario eliminado" });
};

exports.editarusuario =async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono, contrasena, id_rol } = req.body;
    const datos = [nombre, email, telefono, contrasena, id_rol, id];
    await database.query("UPDATE usuarios SET nombre = ?, email = ?, telefono = ?, contrasena = ?, id_rol = ? WHERE id_usuarios = ?", datos);
    res.json({ msg: "usuario modificado" });
};


