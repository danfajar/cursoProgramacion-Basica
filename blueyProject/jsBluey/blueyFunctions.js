const seleccionarPersonaje = document.getElementById("seleccionar-personaje")
const spanPersonaje = document.getElementById('nombre-personaje')
const inputBluey = document.getElementById("Bluey")
const inputBingo = document.getElementById("Bingo")


inputBluey.addEventListener('click', eleccionPersonaje)
inputBingo.addEventListener('click', eleccionPersonaje)

function eleccionPersonaje(){    
    // let spanPersonaje = document.getElementById('nombre-personaje')
    if (inputBluey.checked) {
        console.log(`Seleccionaste a ${inputBluey.id}`)
        spanPersonaje.innerHTML = 'Bluey'        
     } else if (inputBingo.checked) {
        spanPersonaje.innerHTML = 'Bingo'
        console.log(`Seleccionaste a ${inputBingo.id}`)
     }
}
