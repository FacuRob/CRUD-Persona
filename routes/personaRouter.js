const express = require ("express")
const router= express.Router()

const {traerPersonas, traerUnaPersona, crearPersona, actualizacionPersona, borrarPersona} = require ("../controllers/personaControllers.js")

router.get ("/", traerPersonas)
router.get ("/:id", traerUnaPersona)
router.post ("/", crearPersona)
router.put ("/:id", actualizacionPersona)
router.delete ("/:id", borrarPersona)

module.exports = router