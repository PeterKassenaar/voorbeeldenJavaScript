//Namespace
var vehicle = vehicle || {};

vehicle.MiniVan = function (eng) {
    this.engine = eng;
};

vehicle.MiniVan.prototype = function () {
    var start = function () {
        alert('Minivan started ' + this.engine);
    },
    stop = function () {
        alert('Minivan stopped');
    };

    //public members
    return {
        start: start,
        stop: stop
    };
}();