function diminuirNome(){
	var s = document.getElementById("t").innerHTML; // Selecionar template com base no id e colocar em uma variavel 
	var r = s.toLowerCase(); // pegar valor da variavel e diminuida pra colocar em outra variavel
	document.getElementById("t").innerHTML = r; // retornar a variavel diminuida
}
function aumentarNome(){
	var s = document.getElementById("t").innerHTML; // Selecionar template com base no id e colocar em uma variavel
	var r = s.toUpperCase(); // pegar valor da variavel e aumentar pra colocar em outra variavel
	document.getElementById("t").innerHTML = r; // retornar a variavel aumentada
}