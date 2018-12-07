
/*
  Traditional declaration
 */
function plus(a, b) {
	return (a + b);
}

plus(2, 2);

/*
  Defenition declaration
*/

var plus = function (a, b) {
	return (a + b);
}

plus(4, 5);

/*
	Arrow funtions
*/

var power = (base, exponent) => {
    let result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

var square1 = (x) => {
    return x * x
};

var square2 = (x) => x * x;
