const database = require('../database');

exports.listarproductos =async (req, res) => {
    const productos = await database.query("SELECT * FROM productos");
    res.json({ productos })
};


exports.listarproducto =async (req, res) => {
    const { id } = req.params;
    const productos = await database.query("SELECT * FROM  productos   WHERE id_productos= ?", [id]);
    res.json({ productos })
};

exports.agregarproductos =async (req, res) => {
    const { nombre, descripcion, id_tipos, precio, img  } = req.body;
    const datos = [nombre, descripcion, id_tipos, precio, img];
    await database.query("INSERT INTO productos(nombre, descripcion, id_tipos, precio, img) VALUES(?,?,?,?,?)", datos);
    res.json({ msg: "productos agregado" });
};

exports.eliminaproductos =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM productos WHERE id_productos = ?", [id]);
    res.json({ msg: "productos eliminado" });
};

exports.editarproductos =async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, id_tipos, precio, img } = req.body;
    const datos = [nombre, descripcion, id_tipos, precio, img, id];
    await database.query("UPDATE productos SET nombre = ?, descripcion = ?, id_tipos = ?,precio=?,img=? WHERE id_productos = ?", datos);
    res.json({ msg: "productos modificado" });
};


