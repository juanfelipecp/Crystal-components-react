const router = require('express').Router();
const proveedorescontroller = require('../controllers/proveedorescontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', proveedorescontroller.listarproveedores);

// CONSULTAR UN USUARIO
router.get('/:id', proveedorescontroller.listarproveedor);

// AGREGAR USUARIO
router.post('/', proveedorescontroller.agregarproveedores);

// ELIMINAR USUARIO
router.delete('/:id', proveedorescontroller.eliminaproveedores);

// MODIFICAR USUARIO
router.put('/:id', proveedorescontroller.editarproveedores);

module.exports = router;