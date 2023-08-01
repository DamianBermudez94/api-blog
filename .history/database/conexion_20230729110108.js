const mongoose = require("mongoose");

// función asincrona para poder capturar si tarda la conexion a la base de datos
const conexion = async()=>{
    try {
        
       await mongoose.connect("mongodb://localhost:27017/mi_blog");
       console.log("Base de datos conectada de forma exitosa");
        // Parametros dentro de objeto ( solo si falla la conexion )
        // useNewUrlParser:true
        //useInifiedTopoLogy:true
        //useCreateIndex:true
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos")

    }   
}
module.exports={
    conexion
}