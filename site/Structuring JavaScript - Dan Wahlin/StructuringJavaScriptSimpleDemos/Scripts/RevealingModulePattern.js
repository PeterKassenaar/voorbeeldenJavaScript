//Class and my constructor
var Truck = function (eng) {
    //private members
    var engine = eng,
    start = function () {
        alert('Truck started ' + engine);
    },
    stop = function () {
        alert('Truck stopped');
    };

    //public members
    return {
        start: start,
        stop: stop
    };
};