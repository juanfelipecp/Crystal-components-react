
const modelo =require('../model/proveedores')
exports.listarproveedores =async (req, res) => {
    const proveedores = await modelo().listproveedores();
    res.json({ proveedores });

};


exports.listarproveedor =async (req, res) => {
    const { id } = req.params;
    const proveedores = await modelo().listproveedor([id]);
    res.json({ proveedores });
};

exports.agregarproveedores =async (req, res) => {
    const { nombre, info,link } = req.body;
    const datos = [ nombre, info,link];
    await modelo().agregarproveedores(datos);
    res.json({ msg: "noticias agregado" });
};

exports.eliminaproveedores =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarproveedores([id]);
    res.json({ msg: "noticia eliminado" });
};

exports.editarproveedores =async (req, res) => {
    const { id } = req.params;
    const {  nombre, info,link } = req.body;
    const datos = [ nombre, info,link, id];
    await modelo().editaproveedores(datos);
    res.json({ msg: "noticia modificado" });
};
