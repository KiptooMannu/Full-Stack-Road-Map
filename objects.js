// OBJECT IN JS

// 1. Object Literal
// 2. Object Constructor


// 1. Object Literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age : 20,
    email: 'john@gmail.com',
    hobbies: ['music', 'sports'],
}

//2. Object Constructor

let person2 =  new Object();
person2.firstName = 'Jane';
person2.lastName = 'Doe';
person2.age = 25;
person2.email = 'jane@gmail.com';
person2.hobbies = ['reading', 'movies'];

// console.log(`my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old. I love ${person.hobbies[0]} and ${person.hobbies[1]}`)

// console.log(`my name is ${person2.firstName} ${person2.lastName} and I am ${person2.age} years old. I love ${person2.hobbies[0]} and ${person2.hobbies[1]}`)


//  array of objects


// let people = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 25
//     },
//     {
//         firstName: "Jane",
//         lastName: "Doe",
//         age: 24
//     },
//     {
//         firstName: "Jack",
//         lastName: "Doe",
//         age: 27
//     }
// ];
//Looping through an array of objects

//1. for loop

// for (let i = 0; i < people.length; i++) {
//     console.log(`my name is ${people[i].firstName} ${people[i].lastName} and I am ${people[i].age} years old`)
// }

// 2. forEach

// people.forEach((person) => {
//     console.log(`my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old`)
// })

let people = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    },
    {
        firstName: "Jack",
        lastName: "Doe",
        age: 27
    }
];
// Object.keys() method : returns an array of a given object's own property names, in the same order as we get with a normal loop.

Object.keys(people).map ((key) => {
    console.log(people[key].firstName)
})

//  Object.entries()

// Object.getOwnPropertyNames()
