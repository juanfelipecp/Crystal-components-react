const modelo = require('../model/usuario')

exports.listarusuarios =async (req, res) => {
    const usuarios = await modelo().listusuarios();
    res.json({ usuarios })
};


exports.listarusuario =async (req, res) => {
    const { id } = req.params;
    const usuario = await modelo().listusuario([id]);
    res.json({ usuario })
};

exports.agregarusuario =async (req, res) => {
    const { nombre, email, telefono, contrasena, id_rol, direccion } = req.body;
    const datos = [nombre, email, telefono, contrasena, id_rol, direccion];
    await modelo().agregarusuarios(datos);
    res.json({ msg: "usuario agregado" });
};

exports.eliminausuario =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarusuarios([id]);
    res.json({ msg: "usuario eliminado" });
};

exports.editarusuario =async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono, contrasena, id_rol, direccion } = req.body;
    const datos = [nombre, email, telefono, contrasena, id_rol, direccion, id];
    await modelo().editausuarios(datos);
    res.json({ msg: "usuario modificado" });
};


