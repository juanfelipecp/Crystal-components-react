const contac =require('../model/contactanos');

exports.listarcontactanos =async (req, res) => {
    const contactanos = await contac().listcontactanos();
    res.json({ contactanos })
};


exports.listarcontactarnos =async (req, res) => {
    const { id } = req.params;
    const contactanos = await contac().listcontacto([id]);
    res.json({ contactanos })
};

exports.agregarcontactanos =async (req, res) => {
    const { email,pregunta } = req.body;
    const datos = [email, pregunta];
    await contac().agregarcontactos(datos);
    res.json({ msg: "contactanos agregado" });
};

exports.eliminacontactanos =async (req, res) => {
    const { id } = req.params;
    await contac().eliminarcontactos([id]);
    res.json({ msg: "contactanos eliminado" });
};

exports.editarcontactanos =async (req, res) => {
    const { id } = req.params;
    const { email,pregunta } = req.body;
    const datos = [email,pregunta, id];
    await contac().editarcontactos(datos);
    res.json({ msg: "contactanos modificado" });
};


