const express = require("express");
const router = express.Router();

// Exportamos los controllers
const controladorArticulos = require("../controller/articulo");
router.get("/rutas-de-prueba",controladorArticulos.pruebaArticulos);

router.post("/crear",controladorArticulos.crear);
router.get("/articulos/:ultimos?",controladorArticulos.obtener);
router.get("/articulo/:id",controladorArticulos.filtrar);
router.delete("/articulo/:id",controladorArticulos.borrarArticulo);

//Exportamos las rutas:

module.exports = router; 