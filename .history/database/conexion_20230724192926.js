const mongoose = require ("mongoose");

// función asincrona para poder capturar si tarda la conexion a la base de datos
const conexion = async()=>{
    try {
        
       await mongoose.connect("mongodb://localhost:27017/mi_blog",{
        useNewUrlParser:true,
        useUnifiedTopoLogy:true,
       
       });
       console.log("Base de datos conectada de forma exitosa");
        // Parametros dentro de objeto ( solo si falla la conexion )
        // useNewUrlParser:true
        //useInifiedTopoLogy:true
        //useCreateIndex:true
    } catch (error) {
        console.log(error);

    }   
}
module.exports={
    conexion
}