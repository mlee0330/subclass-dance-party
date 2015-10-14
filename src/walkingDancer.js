var spinningAstronaut = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="spinningAstronaut"></span>');
};

spinningAstronaut.prototype = Object.create(Dancer.prototype);
spinningAstronaut.prototype.constructor = spinningAstronaut;

spinningAstronaut.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    this.$node.animate({
      left: $("body").height() * Math.random(),
      top: $("body").width() * Math.random(),
    }, 2000);  
};