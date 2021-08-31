const modelo = require('../model/ventas')

exports.listarventas =async (req, res) => {
    const ventas = await modelo().listventas();
    res.json({ ventas })
};


exports.listarventa =async (req, res) => {
    const { id } = req.params;
    const ventas = await modelo().listventa([id]);
    res.json({ ventas })
};

exports.agregarventas =async (req, res) => {
    const { mes, numero  } = req.body;
    const datos = [mes, numero];
    await modelo().agregarventas(datos);
    res.json({ msg: "ventas agregado" });
};

exports.eliminaventas =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarventas([id]);
    res.json({ msg: "ventas eliminado" });
};

exports.editarventas =async (req, res) => {
    const { id } = req.params;
    const { mes, numero } = req.body;
    const datos = [mes,numero, id];
    await modelo().editaventas(datos);
    res.json({ msg: "ventas modificado" });
};


