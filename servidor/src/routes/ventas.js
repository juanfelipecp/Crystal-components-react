const router = require('express').Router();
const ventascontroller = require('../controllers/ventascontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', ventascontroller.listarventas);

// CONSULTAR UN USUARIO
router.get('/:id', ventascontroller.listarventa);

// AGREGAR USUARIO
router.post('/', ventascontroller.agregarventas);

// ELIMINAR USUARIO
router.delete('/:id', ventascontroller.eliminaventas);

// MODIFICAR USUARIO
router.put('/:id', ventascontroller.editarventas);

module.exports = router;