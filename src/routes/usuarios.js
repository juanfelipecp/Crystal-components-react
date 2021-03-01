const router = require('express').Router();
const usuarioscontroller = require('../controllers/usuarioscontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', usuarioscontroller.listarusuarios);

// CONSULTAR UN USUARIO
router.get('/:id', usuarioscontroller.listarusuario);

// AGREGAR USUARIO
router.post('/', usuarioscontroller.agregarusuario);

// ELIMINAR USUARIO
router.delete('/:id', usuarioscontroller.eliminausuario);

// MODIFICAR USUARIO
router.put('/:id', usuarioscontroller.editarusuario);

module.exports = router;