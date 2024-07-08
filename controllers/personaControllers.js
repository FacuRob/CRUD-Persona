const personaModel = require("../models/personaModel.js")

//CREACION DEL CRUD
//MOSTRAR A TODAS LAS PERSONAS - FUNCION GET
const traerPersonas = async (req, res) => {
    try {
        const persona = await personaModel.findAll()
        res.json (persona)
    } catch (error) {
        res.json ({message:error.message})
    }
}

//MOSTRAR A UNA PERSONA - FUNCION GET
const traerUnaPersona = async (req, res) => {
    try {
        const persona = await personaModel.findByPk(req.params.id)
        res.json(persona)
    } catch (error) {
        res.json({message:error.message})
    }
}

//REGISTRAR A UNA PERSONA NUEVA - FUNCION POST
const crearPersona = async (req, res) => {
    try {
        await personaModel.create(req.body)
        res.json({"message": "Persona registrada con Exito"})
    } catch (error) {
        res.json({message:error.message})        
    }
}

//ACTUALIZACION DE UNA PERSONA - FUNCION PUT
const actualizacionPersona = async (req, res) => {
    try {
        await personaModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message": "Persona Modificada con Exito"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//ELIMINACION DE UNA PERSONA - FUNCION DELETE
const borrarPersona = async (req, res) => {
    try {
        await personaModel.destroy({where: {id:req.params.id}})
        res.json({"message": "Persona Eliminada Exitosamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {traerPersonas, traerUnaPersona, crearPersona, actualizacionPersona, borrarPersona}