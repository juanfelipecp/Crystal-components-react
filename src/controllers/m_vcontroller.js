const database = require('../database');

exports.listarm_vs =async (req, res) => {
    const m_v = await database.query("SELECT * FROM m_v");
    res.json({ m_v })
};


exports.listarm_v =async (req, res) => {
    const { id } = req.params;
    const m_v = await database.query("SELECT * FROM  m_v   WHERE id_mv = ?", [id]);
    res.json({ m_v })
};

exports.agregarm_v =async (req, res) => {
    const { mision, vision } = req.body;
    const datos = [mision, vision];
    await database.query("INSERT INTO m_v(mision, vision) VALUES(?,?)", datos);
    res.json({ msg: "m_v agregado" });
};

exports.eliminam_v =async (req, res) => {
    const { id } = req.params;
    await database.query("DELETE FROM m_v WHERE id_mv = ?", [id]);
    res.json({ msg: "m_v eliminado" });
};

exports.editarm_v =async (req, res) => {
    const { id } = req.params;
    const { mision, vision } = req.body;
    const datos = [mision, vision, id];
    await database.query("UPDATE m_v SET mision = ?, vision = ? WHERE id_mv = ?", datos);
    res.json({ msg: "m_v modificado" });
};


