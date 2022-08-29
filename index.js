// console.log("Hola Node")

const express = require("express") //Importamos la librería ExpressJS
const cors = require("cors")

const app = express() // Creamos una aplicación con express JS

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id //Clase que representa a todos los jugadores
    }
}

// app.get("/", (req, res) =>{
//     res.send("Hola bienvenidos") //Cuando en la URL raíz reciba una petición responda Hola
// })

app.get("/unirse" , (req, res) => { //Endpoint
    const id = `${Math.random()}`

    const jugador = new Jugador(id) //crear un nuevo jugador

    jugadores.push(jugador) //Con este comando se agrega a la lista de jugadores

    res.setHeader('Access-Control-Allow-Origin', '*') //ingormación cabecera que contine metadatos par informar al server
    
    res.send(id)

})

app.post("/mokepon/:jugadorId", (req, res) => { // recibiremos una petición tipo post porque recibiremos datos en JSON
    const jugadorId = req.params.jugadorId || ""
    console.log(jugadores)
    console.log(jugador.Id)
    res.end()

})



app.listen(8080, () => {
    console.log("Servidor funcionando") //Le damos la instrucción de escuchar continuamente por el puerto 8080 para que responda.
})