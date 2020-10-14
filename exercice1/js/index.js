'use strict';

/**
* Exercice 1
*/

/**
 * gridGenerator
 * @param {number} xAxis
 * @param {number} yAxis
*/

  var gridGenerator = function gridGenerator(xAxis,yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  };

/**
* Run
*/

gridGenerator.prototype.run = function(){
  console.log(this.table());
  }

/**
 * Matrix
 */

gridGenerator.prototype.matrix = function() {
 
 var table = document.createElement("table");
  for (var i = 0; i < this.xAxis; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < this.yAxis; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
 }


/**
* Change Backgroung Color
*/

function changeBackgroungColor(className) {
   
  setInterval( function () {
    
  var elems = document.querySelectorAll(className);
  var index = 0, length = elems.length; 
    
    for ( ; index < length; index++) {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      elems[index].style.backgroundColor = "#"+randomColor;
    }
  },2000);
}

var tab = new gridGenerator(4,4);
tab.matrix(); 

var tableStyle = document.querySelector("table");
var trStyle = document.querySelector("tr");
var tdStyle = document.querySelector("td");


tableStyle.style.width = "100%" ;
tableStyle.style.height = "350px" ;



changeBackgroungColor("td");

