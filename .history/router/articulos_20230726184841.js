const express = require("express")
const router = express.Router();
const controllerArticulos = require("../controller/Articulos")

router("/ruta-de-prueba",controllerArticulos.prueba);



// Exportamos el router con las diferentes rutas
exports.module = router;