const router = require('express').Router();
const rolcontroller = require('../controllers/rolcontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', rolcontroller.listarrols);

// CONSULTAR UN USUARIO
router.get('/:id', rolcontroller.listartirol);

// AGREGAR USUARIO
router.post('/', rolcontroller.agregarrol);

// ELIMINAR USUARIO
router.delete('/:id', rolcontroller.eliminarol);

// MODIFICAR USUARIO
router.put('/:id', rolcontroller.editarrol);

module.exports = router;