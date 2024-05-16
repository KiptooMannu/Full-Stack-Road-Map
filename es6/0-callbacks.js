/*A callback function is a function that is passed to another function 
as an argument and is executed after some operation has been completed.
Below is an example of a simple callback function that logs to the console 
after some operations have been completed.*/

const callback = () => {

    function doHomework(subject, callAlertFinished) {
       console.log(`started my ${subject} homework.`);
       callAlertFinished();  //callback function
    }

    function alertFinished() {
        console.log('Finished my homework');        
    }

    doHomework("maths",alertFinished);
}

callback(); //started my maths homework. Finished my homework