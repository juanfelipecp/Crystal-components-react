const modelo = require('../model/terminos');

exports.listarterm =async (req, res) => {
    const term =  await modelo().listterms();
    res.json({ term })
};


exports.listerm =async (req, res) => {
    const { id } = req.params;
    const term =  await modelo().listterm([id]);
    res.json({ term })
};

exports.agregarterm =async (req, res) => {
    const { term } = req.body;
    const datos = [ term];
    await modelo().agregarterms(datos);
    res.json({ msg: "terminos agregado" });
};

exports.eliminaterm =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarterms([id]);
    res.json({ msg: "terminos eliminado" });
};

exports.editarterm =async (req, res) => {
    const { id } = req.params;
    const {  term } = req.body;
    const datos = [ term, id];
    await modelo().editaterms(datos);
    res.json({ msg: "terminos modificado" });
};
