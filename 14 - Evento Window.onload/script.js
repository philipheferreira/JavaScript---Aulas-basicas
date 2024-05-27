document.onkeydown = teclado;

	function teclado(e){
		if (e.keyCode == 38){
			document.querySelector('.info').innerHTML = 'Seta para Cima!'
		} else
		if(e.keyCode == 40){
			document.querySelector('.info').innerHTML = 'Seta para Baixo!';
		}else
		if(e.keyCode == 37){
			document.querySelector('.info').innerHTML = 'Seta para Esquerda!';
		}else
		if(e.keyCode == 39){
			document.querySelector('.info').innerHTML = 'Seta para Direita!';
		}
	}