// Console helper functions / console command line API

console.log('hi there!');


console.warn ('warning!');

console.error('Error!');

console.assert(10 == 5 * 2);

function doStuff() {
	console.group('Mijn stappenplan');
	firstStep();
	secondStep();
	thirdStep();
	console.groupEnd();
}

function firstStep() {
	//var counter = 1;
	console.group('inside firstStep()');
	console.log('Step 1a');
	console.log('Step 1b');
	console.log('Step 1c');
	console.groupEnd();
}

function secondStep() {
	console.group('inside secondStep()');
	console.log('Step 2a');
	console.log('Step 2b');
	console.log('Step 2c');
	console.groupEnd();
}

function thirdStep() {	
	console.log('Step 3a');
	console.log('Step 3b');	 
}

doStuff();

// formatting
console.log('%cDit is een groot bericht', 'font-size: large; color: red');


// timing
//console.time('mijn tijd value');
//window.setTimeout(function () { console.timeEnd('mijn tijd value') }, 2500);



// debugging
// debugger;


// console.table() demonstration

// simple
console.table([{test:'123'}, {test:'456'}]);

// complex
// credits: https://developers.google.com/chrome-developer-tools/docs/tips-and-tricks#console-table
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}


var family = {};
family.mother = new Person("Susan", "Doyle", 32);
family.father = new Person("John", "Doyle", 33);
family.daughter = new Person("Lily", "Doyle", 5);
family.son = new Person("Mike", "Doyle", 8);

console.table(family, ["firstName", "lastName", "age"]);


/*
// Command line API
// Zie documentatie bij Chrome Dev Tools online
//  https://developers.google.com/chrome-developer-tools/docs/console
*/