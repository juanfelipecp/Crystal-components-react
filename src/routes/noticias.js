const router = require('express').Router();
const noticiascontroller = require('../controllers/noticiascontroller');

// CONSULTAR TODOS LOS USUARIOS
router.get('/', noticiascontroller.listarnoticias);

// CONSULTAR UN USUARIO
router.get('/:id', noticiascontroller.listarnoticia);

// AGREGAR USUARIO
router.post('/', noticiascontroller.agregarnoticias);

// ELIMINAR USUARIO
router.delete('/:id', noticiascontroller.eliminanoticias);

// MODIFICAR USUARIO
router.put('/:id', noticiascontroller.editarnoticias);

module.exports = router;