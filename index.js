const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


const pokemonRoutes = require("./routes/pokemon")

const app = express()
const port = 3000

app.set("port", port)
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hola entrenador")
})

app.use("/api/pokemon",pokemonRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Conected to DB"))
    .catch(err=> console.error("Could not connect to MongoDB", err.message))

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})