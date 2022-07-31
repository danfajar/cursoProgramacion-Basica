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


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataquesMokeponEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon ('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon ('Ratigüeya','./assets/mokepons_mokepon_ratigueya_attack.png',5)


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

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)      
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'    
    sectionSeleccionarAtaque.style.display = 'flex'

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

        sectionSeleccionarMascota.style.display = 'flex'
        sectionSeleccionarAtaque.style.display = 'none'
    }

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
    botones = document.querySelectorAll('.BAtaque')

    // botonFuego.addEventListener('click', ataqueFuego)   
    // botonAgua.addEventListener('click', ataqueAgua)    
    // botonTierra.addEventListener('click', ataqueTierra)

    
}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'

            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'

            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'

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

    console.log(`Atque enemigo: ${ataqueEnemigo}`)
    
    iniciarCombate()    
    // combate()

}

function iniciarCombate(){
    if (ataqueJugador.length === 5) {
        combate ()
    }
}

function combate (){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log(ataqueJugador[index])        
    }

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje('EMPATE')

    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo = vidasEnemigo -1
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else if (ataqueJugador == "AGUA" && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo = vidasEnemigo -1
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else if (ataqueJugador == "TIERRA" && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo = vidasEnemigo -1
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else {
        crearMensaje('PERDISTE')
        vidasJugador = vidasJugador -1
        spanVidasJugador.innerHTML = vidasJugador
    }

    contadorVidas()

}

function contadorVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal('¡FELICITACIONES, GANASTE! 😁👍')

    } else if (vidasJugador == 0){
        crearMensajeFinal('LO SIENTO, PERDISTE! 👎🤖')
    }

}

function crearMensaje (resultadoCombate) {
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal (resultadoFinal) {
   
    sectionMensajes.innerHTML = resultadoFinal    
    botonFuego.disabled = true    
    botonAgua.disabled = true    
    botonTierra.disabled = true    
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

window.addEventListener('load', iniciarJuego)