const router = require('express').Router();
const m_vcontroller = require('../controllers/m_vcontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', m_vcontroller.listarm_vs);

// CONSULTAR UN USUARIO
router.get('/:id', m_vcontroller.listarm_v);

// AGREGAR USUARIO
router.post('/', m_vcontroller.agregarm_v);

// ELIMINAR USUARIO
router.delete('/:id', m_vcontroller.eliminam_v);

// MODIFICAR USUARIO
router.put('/:id', m_vcontroller.editarm_v);

module.exports = router;