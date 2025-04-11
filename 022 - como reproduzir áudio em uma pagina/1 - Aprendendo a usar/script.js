let musica = document.querySelector(".meuAudio");
let botao = document.querySelector(".botao");
let botaoIniciar = document.querySelector(".botaoIniciarMusica");
let botaoPausar = document.querySelector(".botaoPausarMusica");
let duracao = document.querySelector(".duracao");

let duracaoMusica = document.querySelector(".meuAudio").duration;


let duracaoMusica = () =>{
	duracao.innerHTML = duracaoMusica;
}

let iniciarAudio = () => {
musica.play();
}

let pausarAudio = () => {
musica.pause();
}

setInterval(duracaoMusica, 1000);

botaoIniciar.addEventListener("click", iniciarAudio);

botaoPausar.addEventListener("click", pausarAudio);