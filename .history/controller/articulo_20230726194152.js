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

    try {
        let parametro = body.req;
    } catch (error) {
        
    }
    return res.status(400).json({
        status:"error",
        mensaje:"Faltan datos por enviar"
    })
}

module.exports = {
    pruebaArticulos,
    crear
};