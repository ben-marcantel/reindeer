var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];




for (i=0; i<reindeer.length; i++) {
  currentColors= colors[i]
  currentReindeer= reindeer[i]
  output = currentColors + " " + currentReindeer + ", "
  document.getElementById("reindeer").innerHTML += output 
}