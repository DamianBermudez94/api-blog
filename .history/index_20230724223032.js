const { conexion } = require ("./database/conexion");
const express = require("express");
const cors = require("cors");

// Arranca la app
console.log("La app inicializo correctamente");

// conectar base de datos
conexion();
const
// configurar politicas de  cors
app.use(cors());