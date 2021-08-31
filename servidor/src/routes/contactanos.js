const router = require('express').Router();
const contactanoscontroller = require('../controllers/contactanoscontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', contactanoscontroller.listarcontactanos);

// CONSULTAR UN USUARIO
router.get('/:id', contactanoscontroller.listarcontactarnos);

// AGREGAR USUARIO
router.post('/', contactanoscontroller.agregarcontactanos);

// ELIMINAR USUARIO
router.delete('/:id', contactanoscontroller.eliminacontactanos);

// MODIFICAR USUARIO
router.put('/:id', contactanoscontroller.editarcontactanos);

module.exports = router;