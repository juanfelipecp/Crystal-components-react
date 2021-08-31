const router = require('express').Router();
const termcontroller = require('../controllers/termcontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', termcontroller.listarterm);

// CONSULTAR UN USUARIO
router.get('/:id', termcontroller.listerm);

// AGREGAR USUARIO
router.post('/', termcontroller.agregarterm);

// ELIMINAR USUARIO
router.delete('/:id', termcontroller.eliminaterm);

// MODIFICAR USUARIO
router.put('/:id', termcontroller.editarterm);

module.exports = router;