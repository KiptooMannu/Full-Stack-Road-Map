/* PROMISES: an asynchronous action that may complete at some point
in the future and produce a value

States of a promise
1. pending => underlying ops has not yet completed
2.fulfilled => the ops has finished and the promise is fulfilled with a value
3.rejected => An error has occurred during the ops and promise is rejected with a reason. */


// Example of a promise

const fetchData = () => {
    return new Promise((resolve, reject) => {
        console.log('Fetching data');
        setTimeout(() => {
            resolve('Data fetched successfully');
            reject('Error fetching data');
        }, 2000)
    });
}

fetchData().then((receivedData) => {
    console.log(`Data received: ${receivedData}`);
}).catch((error) => {
    console.log(`error: ${error}`);
});