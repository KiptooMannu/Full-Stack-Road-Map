
// Named
// default

export const createData = (newData,data) => {

    data.push(newData);
    console.log(data);
}

export const deleteDataViaId = (data, id) => {
    data && data.forEach((item, index) => {
        if (item.id == id) {
            data.splice(index, 1);
        }
    });

    console.log(data);
}

const loopJSON = (data) => {

    data && data.forEach((item,index) => {
        console.log(`index : ${index} - Item ${item.id}: ${item.joke} - ${item.rating}`)        
    });
}

export default loopJSON;