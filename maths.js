//MATHS IN JS

//1. maths object
//2. maths methods


//1. maths object
// console.log(Math.PI); //3.141592653589793
// console.log(Math.E);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);

// 2. maths methods
//abs: returns absolute value
// console.log(Math.abs(-5)); //5

//ceil: rounds up to the nearest integer: Returns the smallest integer greater than or equal to its numeric argument
// console.log(Math.ceil(10.5)); //6

// floor: rounds down to the nearest floatation value: ie 10.4 -> 10, 10.5 -> 11
// console.log(Math.floor(10.4)); //10

//round: rounds to the nearest integer
console.log(Math.round(10.2));  //10
console.log(Math.round(10.9));   //11

// max and min: returns the highest (or lowest) value in a list of arguments
console.log(Math.max(10, 20, 30, 40, 50));  //50
console.log(Math.min(10, 20, 30, 40, 50));  //10

//pow: returns the value of x to the power of y
console.log(Math.pow(10, 2));  //10^2 = 100
//sqrt: returns the square root of x
console.log(Math.sqrt(25));
//random: returns a random number between 0 and 1 (0 inclusive, 1 exclusive) //prob stat
console.log(Math.random());