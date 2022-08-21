const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vida-jugador')
const spanVidasEnemigo = document.getElementById('vida-enemigo')

const sectionMensajes = document.getElementById('resultado-combate')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')



let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = [] //se crea en la clase 56
let indexAtaqueEnemigo //se crea en la clase 58
let indexAtaqueJugador //se crea en la clase 58
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo


class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon ('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon ('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)


capipepo.ataques.push(
    {nombre :'💧', id:'boton-agua'},
    {nombre :'🔥', id:'boton-fuego'},
    {nombre :'🌱', id:'boton-tierra'},
    {nombre :'🌱', id:'boton-tierra'},
    {nombre :'🌱', id:'boton-tierra'}
)
ratigueya.ataques.push(
    {nombre :'💧', id:'boton-agua'},
    {nombre :'🔥', id:'boton-fuego'},
    {nombre :'🔥', id:'boton-fuego'},
    {nombre :'🔥', id:'boton-fuego'},
    {nombre :'🌱', id:'boton-tierra'}
)
hipodoge.ataques.push(
    {nombre :'💧', id:'boton-agua'},
    {nombre :'💧', id:'boton-agua'},
    {nombre :'💧', id:'boton-agua'},
    {nombre :'🔥', id:'boton-fuego'},
    {nombre :'🌱', id:'boton-tierra'}
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    
    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
           <p>${mokepon.nombre}</p>
           <img src=${mokepon.foto} alt="Imagen de ${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')


    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)      
    botonReiniciar.addEventListener('click', reiniciarJuego)

    sectionReiniciar.style.display = 'none'   
    
}

function seleccionarMascotaJugador(){


    // sectionSeleccionarAtaque.style.display = 'flex' 
    
    sectionVerMapa.style.display = 'flex'
    intervalo = setInterval(pintarPersonaje, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)


    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id  
        mascotaJugador = inputCapipepo.id             
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id              
    } else {
        alert('Selecciona una mascota')
        return 
    }
    sectionSeleccionarMascota.style.display = 'none'    
    extraerAtaques(mascotaJugador)  
    seleccionarMascotaEnemigo()
   
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++){
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

//Se crea en la clase 55
function mostrarAtaques(ataques){

    ataques.forEach((ataque) =>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML +=  ataquesMokepon
    })

    
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque') //Se resuelve en la clase 56

    // botonFuego.addEventListener('click', ataqueFuego)   
    // botonAgua.addEventListener('click', ataqueAgua)    
    // botonTierra.addEventListener('click', ataqueTierra)

    
}
//Se crea secuencia Ataque 
function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            }

            ataqueAleatorioEnemigo()
        })
    })
    
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length-1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    secuenciaAtaque()
}   

// function ataqueFuego(){
//     ataqueJugador = 'FUEGO'
//     ataqueAleatorioEnemigo()
// }

// function ataqueAgua(){
//     ataqueJugador = 'AGUA'
//     ataqueAleatorioEnemigo()
// }

// function ataqueTierra(){
//     ataqueJugador = 'TIERRA'
//     ataqueAleatorioEnemigo()
// }

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length-1)

    if (ataqueAleatorio == 0 ||ataqueAleatorio == 1 ){
        ataqueEnemigo.push('FUEGO')

    } else if(ataqueAleatorio == 2 ||ataqueAleatorio == 3 ){
        ataqueEnemigo.push('AGUA')

    } else {
        ataqueEnemigo.push('TIERRA')

    }

    // console.log(`Ataque enemigo: ${ataqueEnemigo}`)
    
    iniciarCombate()    
    // combate()

}

function iniciarCombate(){
    if (ataqueJugador.length === 5) {
        combate ()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate (){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log(ataqueJugador[index]) 
        if (ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATE')

        }else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador

        }else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador

        }else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
    
        }else {
            crearMensaje('PERDISTE')
            victoriasEnemigo ++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    // if (ataqueJugador == ataqueEnemigo){
    //     crearMensaje('EMPATE')

    // }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo = vidasEnemigo -1
    //     spanVidasEnemigo.innerHTML = vidasEnemigo

    // }else if (ataqueJugador == "AGUA" && ataqueEnemigo == 'FUEGO'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo = vidasEnemigo -1
    //     spanVidasEnemigo.innerHTML = vidasEnemigo

    // }else if (ataqueJugador == "TIERRA" && ataqueEnemigo == 'AGUA'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo = vidasEnemigo -1
    //     spanVidasEnemigo.innerHTML = vidasEnemigo

    // }else {
    //     crearMensaje('PERDISTE')
    //     vidasJugador = vidasJugador -1
    //     spanVidasJugador.innerHTML = vidasJugador
    // }

    contadorVidas()

}

function contadorVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('¡ESTO FUE UN EMPATE! 🤷‍♂️')        

    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('¡FELICITACIONES, GANASTE! 😁👍')
    
    }else {
        crearMensajeFinal('LO SIENTO, PERDISTE! 👎🤖')
    }

}

function crearMensaje (resultado) {
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    // nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    // nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal (resultadoFinal) {
   
    sectionMensajes.innerHTML = resultadoFinal  

    // botonFuego.disabled = true    
    // botonAgua.disabled = true    
    // botonTierra.disabled = true    

    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

function pintarPersonaje(){

    capipepo.x = capipepo.x + capipepo.velocidadX
    capipepo.y = capipepo.y + capipepo.velocidadY

    // let imagenDeCapipepo = new Image()
    // imagenDeCapipepo.src = capipepo.foto
    // imagenDeCapipepo,
    // 20,
    // 40,
    // 100,
    // 100

    lienzo.clearRect(0, 0, mapa.width, mapa.height )
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}

function moverArriba () {
    // capipepo.y = capipepo.y - 5
    capipepo.velocidadY = -5
    // pintarPersonaje()
}

function moverAbajo () {
    // capipepo.y = capipepo.y + 5
    capipepo.velocidadY = 5
    // pintarPersonaje()
}
function moverIzquierda () {
    // capipepo.x = capipepo.x - 5
    capipepo.velocidadX = -5
    // pintarPersonaje()
}
function moverDerecha () {
    // capipepo.x = capipepo.x + 5
    capipepo.velocidadX = 5
    // pintarPersonaje()
}

function detenerMovimiento(){
    capipepo.velocidadX = 0
    capipepo.velocidadY = 0
}

function sePresionoUnaTecla(event){
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;    
        default:
            break;
    }


}

window.addEventListener('load', iniciarJuego)