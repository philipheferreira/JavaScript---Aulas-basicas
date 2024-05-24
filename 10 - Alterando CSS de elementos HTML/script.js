var tam = 50;
function aumenta(){
	tam = tam + 10;
	document.getElemetById("b1").style.width = tam + "px";
	document.getElementById("b1").style.height = tam + "px";
}