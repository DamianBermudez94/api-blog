const validator = require("validator");
const Articulos = require("../modelos/Articulos");

const pruebaArticulos = (req, res) =>{
    return res.status(200).json([{
        nombre:"Damina",
        apellido:"Bermudez",
        edad:28,
        fecha_nacimiento:1994
    },{
        email:"bermudezdamian7@gmail.com",
        telefono: 2227508824,
        porfolio:"damianbermudezdev.es"
    },{
        description:"Hola!, mi nombre es Damina Bermudez y soy Developer Web Full Stack"
    }

  ])
}

const crear = async (req, res) =>{
    let parametros = req.body;
    console.log("hola",parametros);
    // validar datos
    try {
        let validator_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo,{min:5, max:50}) ;
        let validator_contenido = !validator.isEmpty(parametros.contenido) && validator.isLength(parametros.contenido,{min:5, max:200});
        if (!validator_titulo || !validator_contenido) {
            throw new Error("los datos no se han podido guardar correctamnete")
        }
                
         // Crear el objeto a guardar
         const articulo = new Articulos(parametros);

         const articuloGuardado = await articulo.save()
         // Guardamos los  datos en la base de datos (Moongo)
         return res.status(200).json({
            status: "success",
            mensaje:"los datos se  han guardado correctamente",
            parametros,
            articulo:articuloGuardado
        });
        
    } catch (error) {
                return res.status(400).json({
                    status:"error",
                    mensaje:"No se ha podido guardar el articulo, por favor verificar los datos al enviar. Gracias!!"
                })
    }

   

   
 
}

const obtener = async(req, res)=>{
    // metodo find sirve para devolver todos los documentos de la coleccion y devuelve todos los campos del documento

    // Metodo sort: sirve para poder ordenar el listado de los elementos

    // Metodo limit: sirve para poder meter un limite al listado obtenido
    
    let listado = await Articulos.find({});
    if(req.params.ultimos){
        listado.limit(3).sort({fecha:-1}).exec();
    }
    
    
  
    if(!listado) {
     
        return res.status(400).json({
            status:"error",
            mensaje:"No se han encontrado articulos..."
        })
        
       
    }
    return res.status(200).send({
        status: "success",
        contador: listado.length,
        parametro:req.params.ultimos,
        mensaje:"Listado de los articulos obtenidos",
        listado
       })
}


const filtrar = async(req, res)=>{
   //Buscar el id en la base de datos
   let id = req.params.id;
   console.log("soy el id",id);

   // buscamos en la base de datos la lista de elementos

   const listado = await Articulos.findById(id);
    console.log("soy el listado",listado);
   if(id && !listado) {
        return res.status(400).json({
            status:"error",
            mensaje:"No se han encontrado articulos..."
        });
    }
    return res.status(200).json({
        status:"success",
        articulo
    })
   
}

module.exports = {
    pruebaArticulos,
    crear,
    obtener,
    filtrar
};