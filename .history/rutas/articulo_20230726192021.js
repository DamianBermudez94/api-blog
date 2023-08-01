const express = require("express");
const router = express.Router();

// Exportamos los controllers
const controladorArticulos = require("../controller/articulo");
router.get("/rutas-de-prueba",controladorArticulos.pruebaArticulos);

//Exportamos las rutas:

module.exports = router; 