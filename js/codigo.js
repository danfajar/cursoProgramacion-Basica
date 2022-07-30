let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra) 
    
    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')


    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML ='Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML ='Capipepo'                
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML ='Ratigueya'                 
    } else {
        alert('Selecciona una mascota')

        let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
        sectionSeleccionarMascota.style.display = 'flex'

        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
        sectionSeleccionarAtaque.style.display = 'none'
    }  

    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let spanVidasJugador = document.getElementById('vida-jugador')
    let spanVidasEnemigo = document.getElementById('vida-enemigo')

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
   

    let notificacion = document.getElementById('resultado-combate')
    // let notificacion = document.createElement('p')
    notificacion.innerHTML = resultadoCombate

    // sectionMensajes.appendChild(notificacion)

    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = `Tú mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo}. ${resultadoCombate}`
    // sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFinal) {
   

    let sectionMensajes = document.getElementById('resultado-combate')

    // let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal

    // sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

window.addEventListener('load', iniciarJuego)