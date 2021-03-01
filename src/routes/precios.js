const router = require('express').Router();
const precioscontroller = require('../controllers/precioscontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', precioscontroller.listarprecios);

// CONSULTAR UN USUARIO
router.get('/:id', precioscontroller.listarprecio);

// AGREGAR USUARIO
router.post('/', precioscontroller.agregarprecios);

// ELIMINAR USUARIO
router.delete('/:id', precioscontroller.eliminaprecios);

// MODIFICAR USUARIO
router.put('/:id', precioscontroller.editarprecios);

module.exports = router;