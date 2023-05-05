function TocarSom (idElementoAudio) {
   document.querySelector(idElementoAudio).play() 
}

const listadeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (contador < listadeTeclas.length) {

    const tecla = listadeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    listadeTeclas[contador].onclick = function () {
        TocarSom(idAudio);
    }
    contador += 1;

    console.log(contador)
}