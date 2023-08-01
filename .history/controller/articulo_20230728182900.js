const validator = require("validator")

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
    console.log(parametros);
    // validar datos
    try {
       
        let titulo_validator = !validator.isEmty(parametros.titulo)
        let contenido_validator = !validator.isEmty(parametros.contenido);
        console.log("hola",titulo_validator,contenido_validator);
        if (!titulo_validator || !contenido_validator) {
            throw new Error("No se ha validado correctamente los datos")
        }

    } catch (error) {
        return res.status(400).json({
            status:"error",
            mensaje:"Faltan datos por enviar"
        })
    }
    return res.status(200).json({
        mensaje:"Se han guardado correctamente",
        parametros
        
    })

    
}

module.exports = {
    pruebaArticulos,
    crear
};