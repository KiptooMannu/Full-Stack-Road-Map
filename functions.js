
// Functions: A block of code that can be called and executed at any time. : reusable code
// 1. Normal Function 
// 2. Arrow Function
// 3. Anonymous Function
// 4. Immediately Invoked Function Expression (IIFE)


// 1. Normal Function

// Function Declaration
function greet() {
    console.log("Hello World");
}

function greetStudent(name) {
    console.log(`Hello ${name}`);
}

//function call
// greet();

// greetStudent("John");



// 2. Arrow Function :    

let greetArrow = () => {
    console.log("Hello World");
}

let greetStudentArrow = (name) => {
    console.log(`Hello ${name}`);
}

//function call

greetArrow();
greetStudentArrow("kevin")

// 3. Anonymous Function : A function without a name

let greetAnonymous = function () {
    console.log("Hello World");
}

    //4. Immediately Invoked Function Expression (IIFE)

(function name() {
        console.log("Hello World am a IIFE function");
})();

(() => {
    console.log("this is an arrow function IIFE");
})();

// 5. Function with return statement

function add(a, b) {
    return a + b;
}   

const newSum = (x , z) =>  {
    return x + z;
}

let sumResult = add(10, 20);
let newSumResult = newSum(30, 40);

console.log(newSumResult);
console.log(sumResult);

