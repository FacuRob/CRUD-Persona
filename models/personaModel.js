const db = require("../data/db.js")

const {DataTypes} = require("sequelize")

const personaModel = db.define("persona", {
    nombre: {type:DataTypes.STRING},
    apellido: {type:DataTypes.STRING},
    edad: {type:DataTypes.INTEGER},
    provincia: {type:DataTypes.STRING},
    domicilio: {type:DataTypes.STRING},
})

module.exports = personaModel