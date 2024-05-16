// LOOPS IN JS
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. break statement
// 5. continue statement
// 6. for...of loop
// 7. for...in loop
// 8. foreach loop

//array of fruits
let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
//array of objects
let people = [
    {
        name: 'John Doe',
        age: 30,
    },
    {
        name: 'Jane Doe',
        age: 25,
    },
    {
        name: 'Jim Doe',
        age: 35,
    }
];

let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};



//1.foreach loop : it is used to iterate over an array or object

// fruits.forEach((fruit) => {    //es6 arrow function
//     console.log(fruit);
// })

// fruits.forEach(function (fruit) {    //es5 function
//     console.log(fruit);
// })

// 2. for...in loop: it is used to iterate over an object

// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

// 3. for...of loop: it is used to iterate over an array

// for (let item of fruits) {
//     console.log(item);
// }

//4. for loop : it is used to iterate over an array or object

//list numbers from 1 to 10

// for(initialization; condition; increment/decrement){ {
//code to be executed
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// GROUP ASSIGNMENT
// example 3
// *
// **
// ***
// ****
// *****
// ******

// example 4
// ******
// *****
// ****
// ***
// **
// *

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

// example 8
//*******
//*
//*
//*
//*
//*
//*

//5. while loop : checks the condition first and then executes the code block
// while (condition) {
//     //code to be executed
// // }

// let i = 1;

// while (i <= 10) {
//     console.log(i);  //1,2,3,4,5,6,7,8,9,10
//     i++;
// }

// let j = 10;

// while (j >= 1) {
//     console.log(j);  //10,9,8,7,6,5,4,3,2,1
//     j--;
// }

// 6. do...while loop : executes the code block first and then checks the condition
// do {
//     //code to be executed
//      increment/decrement
// } while (condition);


let k = 1;

do {
  console.log(k)     //1,2,3,4,5,6,7,8,9,10
    k++;
}
while (k <= 10);

let l = 10;
do {    
    console.log(l);  //10,9,8,7,6,5,4,3,2,1
    l--;
} while (l >= 1);



// 7. break statement
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         break; // terminate the loop
//     }
//     console.log(i);  // 0 1 2 3 4
// }

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);  // 0 1 2 3 4
}

// 8. continue statement
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;  // skip the current iteration
//     }
//     console.log(i);  // 0 1 2 3 4 6 7 8 9
// }

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);  // 0 1 2 3 4 6 7 8 9
}



