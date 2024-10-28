const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()


const pokemonRoutes = require("./routes/pokemon")

const app = express()
const port = 3000

app.set("port", port)
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hola entrenador")
})

app.use("/api/pokemon",pokemonRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Conectado a la base de datos"))
    .catch(err=> console.error("No se pudo conectar a MongoDB", err.message))

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})