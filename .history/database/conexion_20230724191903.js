const mongoose = require ("mongoose");

// función asincrona para poder capturar si tarda la conexion a la base de datos
const conexion = async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/mi_blog")
    } catch (error) {
        
    }
}