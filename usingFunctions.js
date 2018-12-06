/*
  Using anonymous closoures
*/

(function () {
	console.log('foo');
})();

/*
  Creating and namespacing modules
*/

var ray = (function () {
	return {
		speak: function () {
			console.log('hello');
		}
	};
})();

ray.speak();


/*
  chaining module method calls
*/

var ray = (function () {
	var DEFAULTS = {
		say: 'Hello',
		speed: 'Normal'
	}

	return {
		speak: function () {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			console.log(statement);
			return this;
		},
		run: function () {
			var myArguments = arguments[0] || '';
			var running = myArguments.speed || DEFAULTS.speed;
			console.log('running ' + running);
			return this;
		}

	};

})();


ray.speak({
	say: 'howdy'
}).run();
