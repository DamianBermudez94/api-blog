const express = require("express");
const router = express.Router();

// Exportamos los controllers
const controllerArticulos = require("../controller/Articulos");
router.get("/rutas-de-prueba".controllerArticulos.prueba);

//Exportamos las rutas:

module.exports = router;