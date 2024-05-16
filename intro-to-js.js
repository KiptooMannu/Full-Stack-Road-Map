//COMMENTS IN JS  

//single comment

/* 
multi 
line 
comment
*/

//Variables in JS

const age = 30;

// console.log("my age is " + age);
// console.log(`my age is ${age}`);   //template string using es6

// age = 31; //error

let name = "john";

name = "peter";

//DISPLAYING OUTPUT IN JS

const newarry = [1,2,3,4,5,6,7,8,9,10];

// alert("hello world");
// console.info("some info");
// console.table(newarry);
// console.log(newarry);

//IDENTIFIERS IN JS :Identifiers are the names given to variables, functions, classes, etc. in JavaScript.
// RULES FOR NAMING IDENTIFIERS
// 1. The first character must be a letter or an underscore (_).
// 2. You can’t use reserved words as identifiers.
// 3. You can’t use special symbols in identifiers, except for the dollar sign ($) and the underscore (_).
// 4. Identifiers are case-sensitive.
// 5. Identifiers can be of any length.


//Naming conventions : camelCase, PascalCase, snake_case, kebab-case

let firstName = "john"; //camelCase
let FirstName = "john"; //PascalCase
let first_name = "john"; //snake_case
// let first-name = "john"; //kebab-case


//DATA TYPES IN JS
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

//Primitive Data Types
// 1. Number : integer, float, double

let num = 10;

// console.log(typeof num);
// console.log(num)


// 2. String : text , "" , '', ``
let str = ``;

// console.log(typeof str);
// console.log(str)

// 3. Boolean : true or false

let isDanielMarried = true;

// console.log(typeof isDanielMarried);
// console.log(isDanielMarried)

// 4. Undefined : variable declared but not assigned

let school;

// console.log(school);  //undefined
// console.log(typeof school); //undefined

// 5. Null : empty value

let grades = null;

// console.log(grades);  //null//
// console.log(typeof grades);  //object

// 6. Symbol : unique value

const sym = Symbol();

// console.log(sym);  //Symbol()
// console.log(typeof sym); //Symbol

// Non-Primitive Data Types
// 1. Object : key value pairs

let person = {
    name: "kevin",
    age : 28,
    education : {
        degree : "masters",
        school : {
            name : "oxford",
            location : "london"
        }
    }
}

//accessing object properties

// console.log(person.education.school.location);

// 2. Array : a DS stores multiple values with indexes. Zero-based index

let fruits = ["apple", "banana", "mango"]; //es6 // apple - 0, banana - 1, mango - 2
let names = new Array("john", "peter", "susan"); //es5

// console.log(fruits[0]);
// console.log(names[1]);


names.forEach((item) => {
    console.log(item);
})