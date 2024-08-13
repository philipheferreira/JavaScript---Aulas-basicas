let imgAtual = "img/roxo.jpg"
let imgAnterior = "img/vermelhas.jpg"
let botaoMudar = document.querySelector(".botao");
let imagens = document.querySelector(".imagens");

botaoMudar.addEventListener("click", trocar);

function trocar(){
	imagens.src = imgAtual;
	// No começo imgAtual armazena "roxo.jpg", o imgAnterior armazena "vermelhas.jpg" e a variavel aux não existe 
	let aux = imgAtual; // Declarado uma variavel para poder receber a info dentro da mensagem atual "roxo.jpg";
	imgAtual = imgAnterior; // A imgAtual ira receber a imagem "Vermelhas.jpg" que estava dentro da anterior;
	imgAnterior = aux; // a imgAnterior vai receber a imagem "roxo.jpg" que estava na primeira linha salva na imgAtual e que foi passada para a variavel aux;
	// let aux no fim está com o "roxo.jpg" no final e será deletado, imgAtual está com o "Vermelhas.jpg" e o imgAnterior está com o "roxo.jpg"
	// Toda vez a operação é trocada de uma com outra
}