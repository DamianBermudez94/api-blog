const express = require("express");
const router = express.Router();

// Exportamos los controllers
const controladorArticulos = require("../controller/articulo");
router.get("/rutas-de-prueba",controladorArticulos.pruebaArticulos);

router.post("/rutas-de-prueba",controladorArticulos.crear);

//Exportamos las rutas:

module.exports = router; 