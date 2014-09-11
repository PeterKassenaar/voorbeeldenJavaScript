


// 2. Maar wat nu als we dit zouden willen doen via een .first() method? Die bestaat niet in Array().
// Oplossing: uitbreiding Array-object met method first() via prototype
if (!Array.prototype.first) {
	Array.prototype.first = function () {
		return this[0];
	};
}

// 2a. Nu kunnen we ook de (eigen) method gebruiken om het eerste element op te vragen.




// 3. Idem, uitbreiding Array-object met method last() via prototype
if (!Array.prototype.last) {
	Array.prototype.last = function () {
		var i = this.length;
		return this[i - 1];
	};
}



// 4. Iets ingewikkelder, uitbreiding Array-object met method startsWith() via prototype
if (!Array.prototype.startsWith) {
	Array.prototype.startsWith = function (char) {
		if (!char) {
			return;
		}
		var helperArr = [];
		for (var i = 0; i < this.length; i++) {
			if (this[i].substring(0, char.length) === char) {
				helperArr.push(this[i]);
			}
		}
		if (helperArr.length > 0) {
			return helperArr;
		} else {
			return;
		}
	};
}
