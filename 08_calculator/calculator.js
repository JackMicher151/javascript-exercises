const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
	return x.reduce((accum, currValue) => accum + currValue,0);
};

const multiply = function(x) {
  let mult = x[0]
  for (i = 1; i < x.length; i++) {
    mult = mult * x[i];
  }
  return mult;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	
  if (x === 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = 1; i <= x; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
