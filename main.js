function TocarSom (idElementoAudio) {
   document.querySelector(idElementoAudio).play() 

   if (elemento && elemento.localName === Audio) {
        elemento.play()
   }

   else {
        console.log('Elemento não encontrado ou seletor inválido ')
   }

}

const listadeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        TocarSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }

}