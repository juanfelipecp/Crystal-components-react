const router = require('express').Router();
const productoscontroller = require('../controllers/productoscontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', productoscontroller.listarproductos);

// CONSULTAR UN USUARIO
router.get('/:id', productoscontroller.listarproducto);

// AGREGAR USUARIO
router.post('/', productoscontroller.agregarproductos);

// ELIMINAR USUARIO
router.delete('/:id', productoscontroller.eliminaproductos);

// MODIFICAR USUARIO
router.put('/:id', productoscontroller.editarproductos);

module.exports = router;