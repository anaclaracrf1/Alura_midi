function TocarSom (idElementoAudio) {
   document.querySelector(idElementoAudio).play() 
}

const listadeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    listadeTeclas[contador].onclick = function () {
        TocarSom(idAudio);
    }

}