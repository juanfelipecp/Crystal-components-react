const modelo = require('../model/tipo')

exports.listartipos =async (req, res) => {
    const tipos_product = await modelo().listtipos();
    res.json({ tipos_product })
};


exports.listartipo =async (req, res) => {
    const { id } = req.params;
    const tipos_product = await modelo().listtipo([id]);
    res.json({ tipos_product })
};

exports.agregartipos =async (req, res) => {
    const { tipo } = req.body;
    const datos = [tipo];
    await modelo().agregartipos(datos);
    res.json({ msg: "tipos_product agregado" });
};

exports.eliminatipos =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminartipos([id]);
    res.json({ msg: "tipos_product eliminado" });
};

exports.editartipos =async (req, res) => {
    const { id } = req.params;
    const { tipo } = req.body;
    const datos = [tipo, id];
    await modelo().editatipos(datos);
    res.json({ msg: "tipos_product modificado" });
};


