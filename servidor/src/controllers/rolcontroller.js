const modelo = require('../model/rol');

exports.listarrols =async (req, res) => {
    const rol = await modelo().listroles();
    res.json({ rol })
};


exports.listartirol =async (req, res) => {
    const { id } = req.params;
    const rol = await modelo().listrol([id]);
    res.json({ rol })
};

exports.agregarrol =async (req, res) => {
    const { rol } = req.body;
    const datos = [rol];
    await modelo().agregarroles(datos);
    res.json({ msg: "rol agregado" });
};

exports.eliminarol =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarroles([id]);
    res.json({ msg: "rol eliminado" });
};

exports.editarrol =async (req, res) => {
    const { id } = req.params;
    const { rol } = req.body;
    const datos = [rol, id];
    await modelo().editaroles(datos);
    res.json({ msg: "rol modificado" });
};


