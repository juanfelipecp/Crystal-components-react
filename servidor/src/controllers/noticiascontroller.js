const modelo = require('../model/noticias')
exports.listarnoticias =async (req, res) => {
    const noticias = await modelo().listnoticias();
    res.json({ noticias })
};


exports.listarnoticia =async (req, res) => {
    const { id } = req.params;
    const noticias = await modelo().listnoticia([id]);
    res.json({ noticias })
};

exports.agregarnoticias =async (req, res) => {
    const { titulo, descripcion ,img} = req.body;
    const datos = [titulo, descripcion,img];
    await modelo().agregarnoticias(datos);
    res.json({ msg: "noticias agregado" });
};

exports.eliminanoticias =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarnoticias([id]);
    res.json({ msg: "noticia eliminado" });
};

exports.editarnoticias =async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const datos = [titulo, descripcion, id];
    await modelo().editanoticias(datos);
    res.json({ msg: "noticia modificado" });
};


