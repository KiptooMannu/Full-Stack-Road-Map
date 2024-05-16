
const data = require('./data.json');

let createData = require('./controller').createData;
let deleteDataViaId = require('./controller').deleteDataViaId;
let loopJSON = require('./controller').loopJSON;


// const newData = {
//     id: 11,
//     joke: 'This is a new joke',
//     rating: 5
// }
// createData(newData,data);

// deleteDataViaId(data, 1);

loopJSON(data);


//ES6
//import
// export


//COMMONJS
// require()
// module.exports || exports