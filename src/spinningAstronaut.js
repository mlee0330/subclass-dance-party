var spinningAstronaut = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

spinningAstronaut.prototype = Object.create(Dancer.prototype);
spinningAstronaut.prototype.constructor = spinningAstronaut;

spinningAstronaut.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    this.$node = $('<span class="spinningAstronaut"></span>');
};


// var distances = [];
// for(var i = 0; i < dancers.length; i++) {
//   var top = dancers[i].styleSettings.top;
//   var left = dancers[i].styleSettings.left;
//   var myTop = this.styleSettings.top;
//   var myLeft = this.stylSettings.left;
//   var xDiff = left - myLeft;
//   var yDiff = top - myTop;
//   var distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2));
//   distances.push(distance);
// }
// var closest = distances.reduce(function(a, b, i, distances) {return Math.min(a,b)});