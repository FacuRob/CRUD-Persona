const express = require ("express")
const app = express()
const cors = require ("cors")
const port = 3030
const personaRouter = require("./routes/personaRouter.js")
const db = require("./data/db.js")

app.use(cors())
app.use(express.json())

app.get("/",(req, res) => {
    res.send("Estas en la Pagina Principal")
})

app.use("/persona", personaRouter)

//Conexion con la Base de Datos
const conexionDB = async () => {
    try {
        await db.authenticate()
        console.log(`Base de Datos conectada Correctamente en el Puerto 3030`)
    } catch (error) {
        console.log(`Se produjo un error, es: ${error}`)
    }
}

app.listen(port,() => {
    conexionDB()
    console.log(`Servidor conectado en el Puerto ${port}`)
})