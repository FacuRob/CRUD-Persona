const {Sequelize} = require("sequelize")
//const db = new Sequelize("codoacodo", "root","", {

const db = new Sequelize("it-soluciones_codoacodo", "368105","3]GeA4Yz_g?d8@X", {
    host: "mysql-it-soluciones.alwaysdata.net",
    dialect: "mysql",
    port: 3306
})

//Modo Local
/*const db = new Sequelize("codoacodo", "root","", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})*/

module.exports = db
