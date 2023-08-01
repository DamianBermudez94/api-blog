const express = require("express")
const router = express.Router();
const controllerArticulos = require("../controller/Articulos")

router("/ruta-de-prueba",controllerArticulos.prueba);