function valida() {
	var usuario = document.querySelector('.usuario').value;
	var senha = document.querySelector('.senha').value;
	if(usuario == ""){
		document.querySelector(".").innerHTML = "Vazio.";
		document.querySelector(".").innerHTML = "";
	}else
	if(senha == " "){
		document.querySelector(".").innerHTML = "";
		document.querySelector(".").innerHTML = "Vazio.";
	}else 
	if(senha.length < 6){
		document.querySelector("").innerHTML = "";
		document.querySelector("").innerHTML = "Senha muito curta!";
	}else{
		document.querySelector('eusuario').innerHTML = "";
		document.querySelector('esenha').innerHTML = "";
		document.querySelector('msg').innerHTML = "Fomulário validade!";
	}
}