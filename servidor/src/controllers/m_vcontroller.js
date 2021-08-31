const modelo =require('../model/m_v');

exports.listarm_vs =async (req, res) => {
    const m_v = await modelo().listm_vs();
    res.json({ m_v })
};


exports.listarm_v =async (req, res) => {
    const { id } = req.params;
    const m_v = await modelo().listm_v([id]);
    res.json({ m_v })
};

exports.agregarm_v =async (req, res) => {
    const { mision, vision } = req.body;
    const datos = [mision, vision];
    await modelo().agregarm_vs(datos);
    res.json({ msg: "m_v agregado" });
};

exports.eliminam_v =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarm_vs([id]);
    res.json({ msg: "m_v eliminado" });
};

exports.editarm_v =async (req, res) => {
    const { id } = req.params;
    const { mision, vision } = req.body;
    const datos = [mision, vision, id];
    await modelo().editam_vs(datos);
    res.json({ msg: "m_v modificado" });
};


