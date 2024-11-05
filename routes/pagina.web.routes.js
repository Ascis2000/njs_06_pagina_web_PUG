
const paginaController = require('../controllers/pagina.web.controller');
const router = require('express').Router();

// GET http://localhost:3000/
// GET http://localhost:3000/about
router.get("/about", paginaController.getAbout);

module.exports = router;