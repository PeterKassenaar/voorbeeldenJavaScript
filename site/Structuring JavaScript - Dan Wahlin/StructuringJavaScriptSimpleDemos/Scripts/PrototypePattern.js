//Class and Constructor
var Car = function (engine) {
    this.engine = engine;
};

Car.prototype = {
    start: function() {
        alert('Car started engine ' + this.engine);
    },
        
    stop: function() {
        alert('Car stopped');
    }
};