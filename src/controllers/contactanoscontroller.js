const database = require('../database');

exports.listarcontactanos =async (req, res) => {
    const contactanos = await database.query("SELECT * FROM contactanos");
    res.json({ contactanos })
};


exports.listarcontactarnos =async (req, res) => {
    const { id } = req.params;
    const contactanos = await database.query("SELECT * FROM contactanos WHERE id_contactanos = ?", [id]);
    res.json({ contactanos })
};

exports.agregarcontactanos =async (req, res) => {
    const { mail,consulta } = req.body;
    const datos = [mail, consulta];
    await database.query("INSERT INTO contactanos(mail,consulta) VALUES(?,?)", datos);
    res.json({ msg: "contactanos agregado" });
};

exports.eliminacontactanos =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM contactanos WHERE id_contactanos = ?", [id]);
    res.json({ msg: "contactanos eliminado" });
};

exports.editarcontactanos =async (req, res) => {
    const { id } = req.params;
    const { mail,consulta } = req.body;
    const datos = [mail,consulta, id];
    await database.query("UPDATE contactanos SET mail = ?,  consulta = ? WHERE id_contactanos = ?", datos);
    res.json({ msg: "contactanos modificado" });
};


