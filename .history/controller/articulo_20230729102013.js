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
        let validator_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo,{min:5, max:15}) ;
        let validator_contenido = !validator.isEmpty(parametros.contenido) && validator.isLength(parametros.contenido,{min:5, max:200});
        if (!validator_titulo || !validator_contenido) {
            throw new Error("los datos no se han podido guardar correctamnete")
        }


        
    } catch (error) {
                return res.status(400).json({
                    status:"error",
                    mensaje:"Faltan datos por enviar"
                })
    }

   

    // Crear el objeto a guardar
    const articulo =  new Articulos(parametros);
    console.log("soy el articulo guardado",articulo);
 
    // Guardamos los datos en la base de datos (Moongo)
    const articuloGuardado = await articulo.save();
    console.log("articulos guardados",articuloGuardado);
    return res.status(200).json({
        mensaje:"los datos se  han guardado correctamente",
        parametros,
        articulo: articuloGuardado
    });
}

module.exports = {
    pruebaArticulos,
    crear
};