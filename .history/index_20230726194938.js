const { conexion } = require ("./database/conexion");
const express = require("express");
const cors = require("cors");

// Arranca la app
console.log("La app inicializo correctamente");

// conectar base de datos
conexion();
// Creamos el servidor de Express
const app = express();
const puerto = 3750;

// configurar politicas de  cors
app.use(cors());

// Convertir el body a un objeto JS
app.use(express.json());

//Rutas
const rutasArticulos = require("./rutas/articulo");

app.use("/api",rutasArticulos);



// Rutas hardcodeadas
app.get("/", (req, res)=>{
    return res.status(200).send(
        "<h1>Bienvenidos a mi blog, aqui encontraras tips, cursos, memes, etc, sobre programación </h1>"
)
})
app.get("/probando", (req, res)=>{
    return res.status(200).json([{
        nombre:"Damina",
        apellido:"Bermudez",
        edad:28,
        fecha_nacimiento:1994
    },{
        email:"bermudezdamian7@gmail.com",
        telefono: 2227508824,
        porfolio:"damianbermudezdev.es"
    }

])
})


// Crear servidor y escuchar las peticiones http
app.listen(puerto,()=>{
    console.log("Servidor corriendo en el puerto "+ puerto);
})