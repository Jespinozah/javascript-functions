/*
  This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure
*/
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

/*
  Create functions that multiply by an arbitrary amount
*/

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(5));
