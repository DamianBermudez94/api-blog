const { conexion } = require ("./database/conexion");
const app = require("express");
const cors = require("cors");

// Arranca la app
console.log("La app inicializo correctamente");

// conectar base de datos
conexion();

// configurar politicas de  cors
app.request(cors());