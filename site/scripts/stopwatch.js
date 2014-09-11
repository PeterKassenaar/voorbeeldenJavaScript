
// Dit is de functie die elke 1000ms wordt aangeroepen
var Timer = function () {
	this.d = new Date();
};

Timer.prototype = {
	getCurrentTime: function () {
		return this.d.getHours() + ' ' + this.d.getMinutes() + ' ' + this.d.getSeconds();
	}
}

var mijnStopWatch = new Timer();
function showTime() {
	var mijnStopWatch = new Timer();
	console.log(mijnStopWatch.getCurrentTime());
}
// Hier maak ik een teller met setInterval
var x;
function startTimer() {
	 x = setInterval(showTime, 1000);
}
function stopTimer() {
	clearInterval(x);
}

