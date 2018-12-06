Beautified JavaScript:
/*
  Using functions as objects
*/

var calc = {
	status: 'Awesome',
	plus: function (a, b) {
		return (
			console.log(this),
			console.log(a + b),
			console.log(arguments),
			console.log(this.status)
		);
	}
}

calc.plus(2, 5);

/*
  Invoking through the constructor
*/

var Person = function () {
	var firstName, secondName;
}

firstPerson = new Person();
firstPerson.firstName = 'Brayan';
firstPerson.secondName = 'Espinoza';
console.log(firstPerson);

/*
  Expanding objects through prototype
*/

var sing = function (song) {
	console.log(song)
}

var Singer = function () {
	var name, sex;
}

Singer.prototype.sing = sing;

firstSinger = new Singer();

firstSinger.name = 'Pavarotti';
firstSinger.sexo = 'M';

firstSinger.sing('Do Re Mi ...');

/*
  Invoking through Call & Apply
*/

var speak = function (what) {
	console.log(this.normal)
	console.log(this.love);
	console.log(this);
}

var saySomething = {
	normal: "meow",
	love: "purr"
}

speak.call(saySomething);


/*
  Arguments parameters
*/

var plus = function () {
	var sum = 0;
	for (var i = arguments.length - 1; i >= 0; i--) {
		sum += arguments[i]
	}
	return sum;
}

console.log(plus(5, 6, 4))
