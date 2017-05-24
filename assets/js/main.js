//Validando formulario
var signUp = document.getElementById("sign-up");
signUp.addEventListener("click", function(){
	var numero = document.getElementById("phone").value; //obtener numero
	document.getElementById("phone").value = ""; //limpiando input

	if(numero == "" || isNaN(numero) == true ||  /^56[0-9]{9}$/.test(numero) == false){
			alert("Debe ingresar un numero de celular válido");
	}else{
			alert("Se a registrado correctamente");
	}
})



var start = document.getElementById("start");
start.addEventListener("click", function (){
	var posX = document.getElementsByClassName("posicionX")[0].value; //obtener numero
	var posY = document.getElementsByClassName("posicionY")[0].value; //obtener numero
	console.log(posX);
	console.log(posY);
	var play = document.getElementById("play");
	var cordenadas = document.getElementsByClassName("cordenadas")[0];

	play.removeChild(cordenadas); //eliminando caja
	var caja = document.createElement("div");
	caja.classList.add("caja");

	
	//Defino el tablero
	var tablero = [
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0]
	]
	//Ingreso el auto en la posicion 3,5
	/*Me traigo los valores de los inputs*/
	

	tablero[posX][posY] = "A";

	//Variables temporales
	var fila, casilla;

	//Recorro el arreglo para dibujar el tablero
	for(var i = 0; i < tablero.length; i++){
	  fila = document.createElement("div");
	  fila.classList.add("fila");
	  for(var j = 0; j < tablero[i].length; j++){
	    casilla = document.createElement("div");
	    casilla.innerHTML = tablero[i][j];
	    casilla.classList.add("casilla")
	    fila.appendChild(casilla);
	  }
	  caja.appendChild(fila);
	}


	var autito = document.createElement("img");
	autito.setAttribute("src", "assets/img/car.png");
	pista.appendChild(autito);
	caja.appendChild(pista); 
	play.appendChild(caja);


	/*CREANDO GRILLA*/

})