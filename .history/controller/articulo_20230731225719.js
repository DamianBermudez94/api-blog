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
    try {
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
    } catch (error) {
        return res.status(400).json({
            status:"error",
            mensaje:"Ups!! Ha ocurrido un error....",
            error
        })
    }
  
   
}


const filtrar = (req, res)=>{
   //Buscar el id en la base de datos
   let id = req.params.id;
   console.log("soy el id",id);

   // buscamos en la base de datos la lista de elementos

    Articulos.findById(id).then((articulos)=>{
    if (!articulos) {
        return res.status(400).json({
            status:"error",
            mensaje:"No se han encontrado articulos..."
        });
    }
    return res.status(200).json({
        status:"success",
        articulos
    });
   }).catch((error)=>{
    return res.status(400).json({
        status:"error",
        mensaje:"Ha ocurrido un error...",
        error
    });
});
        
  
   
}


const borrarArticulo = (req, res)=>{
    //Buscar el id en la base de datos
    let ariticulo_id = req.params.id;
    console.log("soy el id",ariticulo_id);
 
    // buscamos en la base de datos la lista de elementos
 
    const articuloBorrado = Articulos.findOneAndDelete({_id:ariticulo_id}).then((articuloBorrado)=>{
        if (!articuloBorrado) {
            return res.status(400).json({
                status:"error",
                mensaje:"No se ha podido borrar el articulo",
            });
            
        }
        return res.status(200).json({
            status:"success",
            articulo:articuloBorrado,
            mensaje:"El articulo fue borrado correctamente"
        });
    })
       
  
}
const editar = ()=>{
    // Recogemos el id de la base de datos
    let editar_id = req.params.id;

    // Validamos que los datos sean los correctos
    // Recogemos los datos del body

    let datosBody = req.body 
    try {
        let validator_titulo = !validator.isEmpty(datosBody.titulo) && validator.isLength(datosBody.titulo,{min:5, max:50}) ;
        let validator_contenido = !validator.isEmpty(datosBody.contenido) && validator.isLength(datosBody.contenido,{min:5, max:200});
        if (!validator_titulo || !validator_contenido) {
            throw new Error("No se ha validado la información")
        }
        
    } catch (error) {
                return res.status(400).json({
                    status:"error",
                    mensaje:"Faltan datos por enviar!"
                })
    }

    // buscamos el elemento ha editar en la base de datos
    // Metodo findOneAndUpdate: sirve para editar/actulizar un elemento de la base de datos

    Articulos.findOneAndUpdate({_id:editar_id}).then((error,editarArticulo)=>{
        if (error || !editarArticulo) {
            return res.status(400).json({
                status:"error",
                mensaje:"No se ha podido actualizar el articulo seleccionado"
            })
        }
        return res.status(200).json({
            status:"success",
            articulo:editarArticulo
        })
    })
}

module.exports = {
    pruebaArticulos,
    crear,
    obtener,
    filtrar,
    borrarArticulo,
    editar
}