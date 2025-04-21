import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 generateRandomCard();
} 


  function generateRandomCard(){
     let nrosCarta = [ '2', '3', '4','5', '6', '7', '8', '9', '10', 'Q', 'K', 'J', 'A'];
     let palosCarta = ['heart', 'diamond', 'spade', 'club'];

     let crearRandomNros = Math.floor(Math.random()*nrosCarta.length); 
     let crearRandomPalo = Math.floor(Math.random()*palosCarta.length); 

     let valorCarta = nrosCarta[crearRandomNros]; //valor de la posicion random del arreglo de numeros
     let paloCarta = palosCarta[crearRandomPalo]; //valor de la posicion random del arreglo de palos   
      
     function claseCarta(paloCarta){  //devuelve las caracterisiticas de la clase segun el valor del array
      if (paloCarta == "heart") return "hearts";
      if (paloCarta == "diamond") return "diamonds";
      if (paloCarta == "spade") return "spades";
      if (paloCarta == "club") return "clubs";
    } 

   //Seleccionar los elementos del Dom
  
        document.getElementById("card-numero").innerHTML = valorCarta;
        document.getElementById("top-value").className= "card-value top-left " + claseCarta(paloCarta) ;
        document.getElementById("bottom-value").className ="card-value bottom-righ " + claseCarta(paloCarta) ;
      
      };
      
 window.botonGenerador = function botonGenerador(){
     generateRandomCard();
 }


 window.resizeCard = function resizeCard(){ //para el boton de redimensionar la carta 

  let alto= document.getElementById("inputAlto");
  let ancho = document.getElementById("inputAncho");
  let carta = document.getElementById("card");
  let proporAncho = ancho.valueAsNumber / carta.offsetWidth; 
  let proporAlto = alto.valueAsNumber / carta.offsetHeight;
  carta.style.transform = `scale(${proporAncho}, ${proporAlto})` ;

 }

