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

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }


}

class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
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
    const nombre = req.body.mokepon || ""
    const mokepon  = new Mokepon (nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }


    console.log(jugadores)
    console.log(jugadorId)
    res.end()

})

app.post("/mokepon/:jugadorId/posicion", (req, res) => { 
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0



    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId != jugador.id)

    // console.log(x, y)
    res.send({
        enemigos
    })

})



app.listen(8080, () => {
    console.log("Servidor funcionando") //Le damos la instrucción de escuchar continuamente por el puerto 8080 para que responda.
})