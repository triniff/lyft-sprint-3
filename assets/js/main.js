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


//FUNCION CON GRILLA

var start = document.getElementById("start");
start.addEventListener("click", function (){
	var posX = document.getElementsByClassName("posicionY")[0].value; //obtener numero
	var posY = document.getElementsByClassName("posicionX")[0].value; //obtener numero

	document.getElementsByClassName("posicionX")[0].value = "";
	document.getElementsByClassName("posicionY")[0].value = "";
	
	var play = document.getElementById("play");
	var cordenadas = document.getElementsByClassName("cordenadas")[0];

	play.removeChild(cordenadas); //eliminando caja
	var caja = document.createElement("div");
	caja.classList.add("caja");

	
	//Defino el tablero
	var tablero = [
	  ["","","","","","","","","",""],
	  ["","","","","","","","","",""],
	  ["","","","","","","","","",""],
	  ["","","","","","","","","",""],
	  ["","","","","","","","","",""],
	  ["","","","","","","","","",""],
	]

	//TRATANDO DE CREAR CONSTRUCTOR
	function PosAuto(xinicial, yinicial){
		this.yinicial = yinicial;
		this.xinicial = xinicial;
		console.log(yinicial, xinicial);
		this.posicion = function(){
			tablero[xinicial][yinicial] = "<div> <img src='assets/img/car.png' alt='placeholder+image'> </div>";

			//Variables temporales
			var fila, casilla;

			//Recorro el arreglo para dibujar el tablero
			for(var i = 0; i < tablero.length; i++){
			  fila = document.createElement("div");
			  fila.classList.add("fila");
			  for(var j = 0 ; j < tablero[i].length; j++){
			    casilla = document.createElement("div");
		 	    casilla.innerHTML = tablero[i][j];
		 	    casilla.classList.add("casilla")
		 	    fila.appendChild(casilla)
			  }
			  caja.appendChild(fila);
			}

			play.appendChild(caja);
 	
		}
		return this.posicion();
	}

	var movAuto = new PosAuto(posX,posY); 

/*	tablero[posX][posY] = "<div> <img src='assets/img/car.png' alt='placeholder+image'> </div>";

	//Variables temporales
	var fila, casilla;

	//Recorro el arreglo para dibujar el tablero
	for(var i = 0; i < tablero.length; i++){
	  fila = document.createElement("div");
	  fila.classList.add("fila");
	  for(var j = 0 ; j < tablero[i].length; j++){
	    casilla = document.createElement("div");
 	    casilla.innerHTML = tablero[i][j];
 	    casilla.classList.add("casilla")
 	    fila.appendChild(casilla)
	  }
	  caja.appendChild(fila);
	}

	play.appendChild(caja);
*/

	
})