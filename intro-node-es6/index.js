import data from './data.json' assert { type: 'json' };




// all data
// const loopJSON = (data) => {

//     data && data.forEach((item,index) => {
//         console.log(`index : ${index} - Item ${item.id}: ${item.joke} - ${item.rating}`)        
//     });
// }

// loopJSON(data);

// deleting item via an id

// const deleteDataViaId = (data, id) => {
//     data && data.forEach((item,index) => {
//         if (item.id == id) {
//             data.splice(index, 1);
//         }
//     });

//     console.log(data);
// }

// deleteDataViaId(data, 1);

//add data to json

// const addData = (data, id, joke, rating) => {
//     data.push({id, joke, rating});
//     console.log(data);
// }

// addData(data, data.length + 1, 'This is a new joke also', 5);

import loopJSON, { createData, deleteDataViaId } from './controller.js';
// import loopJSON from './controller.js';

const newData = {
    id: data.length + 1,
    joke: 'This is a new joke',
    rating: 5
}
// createData(newData,data);

// deleteDataViaId(data, 1);

loopJSON(data);