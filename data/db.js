const {Sequelize} = require("sequelize")

const db = new Sequelize("codoacodo", "root","", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = db