// destructing data : extracting data from nested objects and arrays

const person = {
    name: 'John Doe',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const { name, age, address: { city, country } } = person;

console.log(person.name);  // accessing object properties via dot notation
console.log(name);  // accessing object properties via destructuring
console.log(age);
console.log(city);