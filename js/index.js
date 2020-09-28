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

