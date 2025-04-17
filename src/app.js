import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 generateRandomCard()} 

  function generateRandomCard(){
     let nrosCarta = [ '2', '3', '4','5', '6', '7', '8', '9', '10', 'Q', 'K', 'J', 'A'];
     let palosCarta = ['heart ', 'diamond', 'spade', 'club'];

      let crearRandomNros = Math.floor(Math.random()*nrosCarta.length); 
      let crearRandomPalo = Math.floor(Math.random()*palosCarta.length); 

      const valorCarta = nrosCarta[crearRandomNros]; //posicion del arreglo numeros
      const paloCarta = palosCarta[crearRandomPalo]; // posicion del arreglo de palos   
      

   //Seleccionar los elementos del Dom
   const cardElement = document.getElementById("card")
   const cardSymbol = document.getElementById("card-symbol")
   //const topValue = document.getElementById("top-value")
   //const bottomValue = document.getElementById("bottom-value")
   cardElement.classList.add(paloCarta)
   cardSymbol.innerHTML = valorCarta
   document.getElementById('card').classList.add(claseCarta(paloCarta));
    
};


function claseCarta(paloCarta){
  if (paloCarta == "heart") return "hearts";
  if (paloCarta == "diamond") return "diamonds";
  if (paloCarta == "spade") return "spades";
  if (paloCarta == "club") return "clubs";
} 