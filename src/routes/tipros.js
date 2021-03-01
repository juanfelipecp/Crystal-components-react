const router = require('express').Router();
const tiproscontroller = require('../controllers/tiprocontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', tiproscontroller.listartipros);

// CONSULTAR UN USUARIO
router.get('/:id', tiproscontroller.listartipro);

// AGREGAR USUARIO
router.post('/', tiproscontroller.agregartipros);

// ELIMINAR USUARIO
router.delete('/:id', tiproscontroller.eliminatipros);

// MODIFICAR USUARIO
router.put('/:id', tiproscontroller.editartipros);

module.exports = router;