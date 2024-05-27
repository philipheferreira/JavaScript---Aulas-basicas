
function incrementa(){
	var v = document.getElementById("e").value;
	document.getElementById("e").value = Number(v) + 1;
}
setInterval("incrementa()", 1000);