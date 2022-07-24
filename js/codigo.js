function iniciarJuego() {
   
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
}

function seleccionarMascotaJugador(){
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
                        
    } else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML ='Langostelvis'
                       
    } else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML ='Tupacalma'
                       
    } else if(inputPydos.checked){
        spanMascotaJugador.innerHTML ='Pydos'
                  
    } else {
        alert('Selecciona una mascota')
    }  

    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML ='Hipodoge'
    } else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML ='Capipepo'
    } else if(ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML ='Ratigueya'
    }else if(ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML ='Langostelvis'
    } else if(ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML ='Tucapalma'
    }else if(ataqueAleatorio == 6){
        spanMascotaEnemigo.innerHTML ='Pydos'
    }
}   

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

window.addEventListener('load', iniciarJuego)