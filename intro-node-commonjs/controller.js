

exports.createData = (newData, data) => {

    data.push(newData);
    console.log(data);
}

exports.deleteDataViaId = (data, id) => {
    data && data.forEach((item, index) => {
        if (item.id == id) {
            data.splice(index, 1);
        }
    });

    console.log(data);
}

exports.loopJSON = (data) => {
    data && data.forEach((item, index) => {
        console.log(`index : ${index} - Item ${item.id}: ${item.joke} - ${item.rating}`)
    });
}

