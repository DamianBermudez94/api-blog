const express = require("express");
const router = express.Router();

const controllerArticulos = require("../controller/Articulos")

//Rutas
router.get("/ruta-de-prueba",controllerArticulos.prueba);



// Exportamos el router con las diferentes rutas
exports.module = router;