
// CONDITIONAL STATEMENTS IN JS : 
// 1. if statement : 
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement


// 1. if statement :
// if (condition) {
//     // code to be executed if condition is true
// }

// let x7 = 10;
// let y7 = 20;

// if (x7 > y7) {
//     // console.log("x is less than y");
// }

// 2. if...else statement
// let x7 = 10;
// let y7 = 8;

// if (x7 < y7) {
//     console.log("x7 is greater than y7");
// } else {
//     console.log("x7 is less than y7");
// }

// 3. if...else if...else statement
// let x8 = 20;
// let y8 = 20;

// if (x8 > y8) {
//     console.log("x8 is greater than y8");
// } else if (x8 < y8) {
//     console.log("x8 is less than y8");
// } else {
//     console.log("x8 is equal to y8");
// }


// 4. switch statement : 

let day = 7; // 1 - 7 day 1 = sunday, 2 = monday, 3 = tuesday, 4 = wednesday, 5 = thursday, 6 = friday, 7 = saturday

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("It is Wednesday.");
//         break;
//     case 5:
//         console.log("It is Thursday.");
//         break;
//     case 6:
//         console.log("It is Friday.");
//         break;
//     case 7:
//         console.log("It is Saturday.");
//         break;
//     default:
//         console.log("Invalid day.");
//         break;
// }

// if (day == 1) {
//     console.log("Sunday");
// } else if (day == 2) {
//     console.log("Monday");
// } else if (day == 3) {
//     console.log("Tuesday");
// } else if (day == 4) {
//     console.log("Wednesday");
// } else if (day == 5) {
//     console.log("Thursday");
// } else if (day == 6) {
//     console.log("Friday");
// } else if (day == 7) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid day.");
// }

// tenary operator : 
// 1. condition ? expr1 : expr2 [if else statement]

// let y = 60
// let x = y > 50 ? "greater" : "lesser";
// console.log(x);

//2. condition && expr1  [if statement]

let q = 69
let result = q == 60 && "greater";
console.log(result);