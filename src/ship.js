var Ship = function(top, left, timeBetweenSteps){
  //get arguments into an array
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    // $(this).on({
    //     mouseover:function(){
    //         $(this).css({
    //             left:(Math.random()*200)+"px",
    //             top:(Math.random()*200)+"px",
    //         });
    //     }
    // });
};

Ship.prototype = Object.create(Dancer.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node = $('<span class="Ship"></span>');
};