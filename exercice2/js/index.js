'use strict';

/**
* Exercice 2
*/

/**
* Draw Bar
* @param {number} sum 
* @param {number} nbr
*/

var drawBar = function drawBar(sum,nbr) {
	this.sum = sum;
	this.nbr = nbr;
}

/**
* Run
*/

drawBar.prototype.run = function(){
  return drawBar;
  }


drawBar.prototype.myBar = function() {

  var sumContainer = document.createElement("div");
  sumContainer.className = "sumContainer"
  var nbrContainer = document.createElement("div");
  nbrContainer.className = "nbrContainer";

  sumContainer.appendChild(nbrContainer);
  document.body.appendChild(sumContainer);

  var sumStyle = document.querySelector(".sumContainer");
  sumStyle.style.background = "grey";
  sumStyle.style.width = this.sum + '%';
  sumStyle.style.height = "24px";

  var nbrSelector = document.querySelector(".nbrContainer");
  nbrSelector.style.background = "blue";
  nbrSelector.style.width = this.nbr + '%';
  nbrSelector.style.height = "24px";

  var elem = nbrSelector; 
  var width = this.nbr ;
  this.num = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(this.num);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }

}
var bar = new drawBar(100,1);
bar.myBar(); 