const modelo = require('../model/productos')

exports.listarproductos =async (req, res) => {
    const productos = await modelo().listprodutos();
    res.status(200).json({productos});
};


exports.listarproducto =async (req, res) => {
    const { id } = req.params;
    const productos = await modelo().listproducto([id]); 
    res.json({ productos })

};

exports.agregarproductos =async (req, res) => {
    const { nombre, descripcion, id_tipos, precio, img  } = req.body;
    const datos = [nombre, descripcion, id_tipos, precio, img];
    await modelo().agregarprodutos(datos); 
    res.json({ msg: "productos agregado" });
};

exports.eliminaproductos =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarprodutos([id]);
    res.json({ msg: "productos eliminado" });
};

exports.editarproductos =async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, id_tipos, precio, img } = req.body;
    const datos = [nombre, descripcion, id_tipos, precio, img, id];
    await modelo().editaprodutos(datos); 
    res.json({ msg: "productos modificado" });
};


