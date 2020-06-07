    /*
        Callback Functions: When a function simply accepts another function as an argument, this 
        contained function is known as a callback function. 
    */

// basic example of a anonymous callback function
// setInterval is a regular funtion. the function passed as first parameter to it is a callback function
setInterval(function() {
    console.log('hello!');
}, 1000);


// example of named callback function
function greeting(name) {
    console.log(`Hello ${name}, welcome to Scotch!`);
}

function introduction(firstName, lastName, callback) {

    const fullName = `${firstName} ${lastName}`;
    callback(fullName); // greeting is called

}
  
introduction('Manak','Upadhyay', greeting); // Hello Manak Upadhyay , welcome to Scotch!

// NOTE: The callback function does not run unless called by its containing function, it is called back. 
// Hence, the term call back function