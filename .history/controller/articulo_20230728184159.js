const validator = require("validator");
console.log(validator);
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
   
    
    return res.status(200).json({
        mensaje:"los datos se  han guardado correctamente",
        parametros
        
    })

    
}

module.exports = {
    pruebaArticulos,
    crear
};