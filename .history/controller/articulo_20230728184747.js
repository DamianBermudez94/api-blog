const validator = require("validator");

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

const crear = (req, res) =>{
    let parametros = req.body;
    console.log("hola",parametros);
    // validar datos
   try {
    let validator_titulo = !validator.isEmty(parametros.titulo) && validator.isLength(parametros.titulo,{min:5, max:15}) ;
    let validator_contenido = !validator.isEmty(parametros.contenido);
    if (!validator_titulo || !validator_contenido) {
        throw new Error("los datos no se han podido guardar correctamnete")
    }
   } catch (error) {
    return res.status(400).json({
        status:"error",
        mensaje:"Faltan datos por enviar"
    })
   }
    
    return res.status(200).json({
        mensaje:"los datos se  han guardado correctamente",
        parametros
        
    })

    
}

module.exports = {
    pruebaArticulos,
    crear
};