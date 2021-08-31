const router = require('express').Router();
const redescontroller = require('../controllers/redescontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', redescontroller.listarredes);

// CONSULTAR UN USUARIO
router.get('/:id', redescontroller.listared);

// AGREGAR USUARIO
router.post('/', redescontroller.agregarredes);

// ELIMINAR USUARIO
router.delete('/:id', redescontroller.eliminaredes);

// MODIFICAR USUARIO
router.put('/:id', redescontroller.editarredes);

module.exports = router;