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
    const parametro = body.req;
    try {
       
        let titulo_validator = !validator.isEmpy()

    } catch (error) {
        return res.status(400).json({
            status:"error",
            mensaje:"Faltan datos por enviar"
        })
    }
    return res.status(200).json({
        mensaje:"Acción de guardar",
        parametro
    })

    
}

module.exports = {
    pruebaArticulos,
    crear
};