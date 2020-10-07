'use strict'

/**
* Exercice 2
*/

class MyMorpionXO {

  constructor(xPlayer,oPlayer) {
  	this.xPlayer = xPlayer;
  	this.oPlayer = oPlayer;
  }

}


var table = document.createElement("table");
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

document.body.appendChild(table);
var tableStyle = document.querySelector("table");
var trStyle = document.querySelector("tr");
var tdStyle = document.querySelector("td");
tableStyle.style.width = "350px" ;
tableStyle.style.height = "350px" ;
tdStyle.style.border = "solid black 3px";

