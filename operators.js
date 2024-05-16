// OPERATORS IN JS
//  1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (ternary) Operator

// 1. Arithmetic Operators code examples
let q = 10;
let w = 20;
console.log(`the value of ${q} + ${w} is ${q + w}`);  //addition operator
console.log(`the value of ${q} - ${w} is ${q - w}`);  //subtraction operator
console.log(`the value of ${q} * ${w} is ${q * w}`);  //multiplication operator
console.log(`the value of ${q} / ${w} is ${q / w}`);  //division operator
console.log(`the value of ${q} % ${w} is ${q % w}`);  //modulus operator : remainder of a/b
console.log(`the value of ${w} % ${q} is ${w % q}`);  //modulus operator : remainder of a/b
console.log(`the value of ${q} ** ${w} is ${q ** w}`);  //exponentiation operator : 10^20=10
console.log(`the value of ${q}++ is ${q++}`);  //post-increment operator //10
console.log(`the value of ${q} is ${q}`);  //11
console.log(`the value of ++${q} is ${++q}`);  //pre-increment operator  //12

console.log(`the value of ${w}-- is ${w--}`);  //post-decrement operator //20
console.log(`the value of ${w} is ${w}`);  //19
console.log(`the value of --${w} is ${--w}`);  //pre-decrement operator  //18

// 2. Assignment Operators code examples
let x1 = 10;
let y1 = 20;
let z1 = 30;
x1 += y1; // x1 = x1+y1
console.log(x1);
x1 -= y1; // x1 = x1-y1
console.log(x1);

x1 *= y1; // x1 = x1*y1
console.log(x1);

x1 /= y1; // x1 = x1/y1
console.log(x1);

x1 %= y1; // x1 = x1%y1
console.log(x1);

x1 **= y1; // x1 = x1**y1
console.log(x1);

// 3. Comparison Operators code examples
let x2 = 10;
let y2 = 20;
console.log(x2 == y2); //equal to
console.log(x2 != y2); //not equal to
console.log(x2 > y2); //greater than
console.log(x2 < y2); //less than
console.log(x2 <= y2); //less than
console.log(x2 >= y2); //less than

// 4. Logical Operators code examples
let x3 = 10;
let y3 = 20;
console.log(x3 == y3 && x3 < y3); //AND
console.log(x3 == y3 || x3 < y3); //OR
console.log(x3 < y3 || x3 < y3); //OR
console.log(!(x3 == y3)); //NOT  //TRUE

// 5. Bitwise Operators code examples
let x4 = 10;
let y4 = 20;

console.log(x4 & y4); // explanation: 10 = 1010, 20 = 10100, 1010 & 10100 = 10100 = 20
console.log(x4 | y4); // explanation: 10 = 1010, 20 = 10100, 1010 | 10100 = 11110 = 30
console.log(~x4); // explanation: ~10 = -(10+1) = -11
console.log(x4 ^ y4); // explanation: 10 = 1010, 20 = 10100, 1010 ^ 10100 = 11110 = 30
console.log(x4 << y4); // explanation: 10 = 1010, 20 = 10100, 1010 << 10100 = 101000000000000000000 = 10485760
console.log(x4 >> y4); // explanation: 10 = 1010, 20 = 10100, 1010 >> 10100 = 0


// 6. String Operators code examples
let x5 = "Sai";
let y5 = "Kumar";
console.log(x5 + y5); //SaiKumar
console.log(x5 += y5); //SaiKumar


//➡️Assignment to be done by Trainees↙️

// OPERATOR PRECEDENCE IN JS
// 1. Grouping ()
// 2. Member Access . []
// 3. Function Call ()
// 4. Increment and Decrement ++ --
// 5. Logical NOT !
// 6. Multiplication and Division * /
// 7. Addition and Subtraction + -
// 8. Relational < > <= >=
// 9. Equality == != === !==
// 10. Logical AND &&
// 11. Logical OR ||
// 12. Conditional ?:
// 13. Assignment = += -= *= /= %=
// 14. Comma ,