const database = require('../database');
const modelo =require('../model/redes')
exports.listarredes =async (req, res) => {
    const redes = await modelo().listredes();
    res.json({ redes })
};


exports.listared =async (req, res) => {
    const { id } = req.params;
    const redes = await modelo().listred([id]);
    res.json({ redes })
};

exports.agregarredes =async (req, res) => {
    const { imagen, nombre,link } = req.body;
    const datos = [ imagen, nombre,link];
    await modelo().agregarredes(datos);
    res.json({ msg: "redes agregado" });
};

exports.eliminaredes =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarredes([id]);
    res.json({ msg: "redes eliminado" });
};

exports.editarredes =async (req, res) => {
    const { id } = req.params;
    const {  imagen, nombre,link } = req.body;
    const datos = [ imagen, nombre,link, id];
    await modelo().editaredes(datos);
    res.json({ msg: "redes modificado" });
};
