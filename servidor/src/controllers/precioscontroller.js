const modelo = require('../model/precios');

exports.listarprecios =async (req, res) => {
    const precios = await modelo().listprecios();
    res.json({ precios })
};


exports.listarprecio =async (req, res) => {
    const { id } = req.params;
    const precios = await modelo().listprecio([id]);
    res.json({ precios })
};

exports.agregarprecios =async (req, res) => {
    const { dolar, cop } = req.body;
    const datos = [dolar, cop];
    await modelo().agregarprecios(datos);
    res.json({ msg: "precios agregado" });
};

exports.eliminaprecios =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarprecios([id]);
    res.json({ msg: "precios eliminado" });
};

exports.editarprecios =async (req, res) => {
    const { id } = req.params;
    const { dolar, cop } = req.body;
    const datos = [dolar, cop, id];
    await modelo().editaprecios(datos);
    res.json({ msg: "precios modificado" });
};


