const { conexion } = require ("./database/conexion");
const express = require("express");
const cors = require("cors");

// Arranca la app
console.log("La app inicializo correctamente");

// conectar base de datos
conexion();
// Creamos el servidor de Express
const app = express();

// configurar politicas de  cors
app.use(cors());

// Convertir el body a un objeto JS
app.use(express.json());

// Crear servidor y escuchar las peticiones http

app.liste(puerto,()=>{
    console.log("Servidor corriendo en el puerto "+ puerto);
})