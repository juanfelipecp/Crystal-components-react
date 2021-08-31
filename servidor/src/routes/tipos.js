const router = require('express').Router();
const tipocontroller = require('../controllers/tipocontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', tipocontroller.listartipos);

// CONSULTAR UN USUARIO
router.get('/:id', tipocontroller.listartipo);

// AGREGAR USUARIO
router.post('/', tipocontroller.agregartipos);

// ELIMINAR USUARIO
router.delete('/:id', tipocontroller.eliminatipos);

// MODIFICAR USUARIO
router.put('/:id', tipocontroller.editartipos);

module.exports = router;