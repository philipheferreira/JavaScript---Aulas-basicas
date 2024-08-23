let musica = document.querySelector(".meuAudio");
let botao = document.querySelector(".botao");
let botaoIniciar = document.querySelector(".botaoIniciarMusica");
let botaoPausar = document.querySelector(".botaoPausarMusica");

let iniciarAudio = () => {
musica.play();
}

let pausarAudio = () => {
musica.pause();
}


botaoIniciar.addEventListener("click", iniciarAudio);

botaoPausar.addEventListener("click", pausarAudio);