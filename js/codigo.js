const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
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

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida, ataque){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = ataque
    }

}

let hipodoge = new Mokepon('Pydos','./assets/mokepons_mokepon_hipodoge_attack.png',5,'TIERRA')
let capipepo = new Mokepon ('Langostelvis','./assets/mokepons_mokepon_capipepo_attack.png',5,'AGUA')
let ratigueya = new Mokepon ('Langostelvis','./assets/mokepons_mokepon_ratigueya_attack.png',5,'FUEGO')

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'    
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
    botonFuego.addEventListener('click', ataqueFuego)   
    botonAgua.addEventListener('click', ataqueAgua)    
    botonTierra.addEventListener('click', ataqueTierra)    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'    
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML ='Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML ='Capipepo'                
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML ='Ratigueya'                 
    } else {
        alert('Selecciona una mascota')

        sectionSeleccionarMascota.style.display = 'flex'
        sectionSeleccionarAtaque.style.display = 'none'
    }  
    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,6)

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML ='Hipodoge'
    } else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML ='Capipepo'
    } else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML ='Ratigueya'
    }else if(mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML ='Langostelvis'
    } else if(mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML ='Tucapalma'
    }else if(mascotaAleatoria == 6){
        spanMascotaEnemigo.innerHTML ='Pydos'
    }
}   

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'

    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'

    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'

    }
    combate()
}

function combate (){
    
    

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