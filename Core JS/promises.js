// Promises are alternatives to callbacks. In order to avoid nested callbacks(callback hell), we
// use promises.

// I promise to do this whenever that is true. If it isn't true, then I won't.

// A promise is used to handle the asynchronous(not happening at same time) result of an operation.
// JavaScript is designed to not wait for an asynchrnous block of code to completely execute before other
// synchronous parts of the code can run.

// RESOLVE is executed when everything goes good.
// REJECT is executed when there an error occurs.

// creating a Promise
const promise = new Promise(function (resolve, reject) {
  // NOTE: RESOLVE AND REJECT ARE CALLBACKS
  // promise description
});

// example - creating a promise
const weather = true;
const date = new Promise((resolve, reject) => {
  if (weather) {
    const dateDetails = {
      name: "Cubana Restaurant",
      location: "55th Street",
      table: 5,
    };
    resolve(dateDetails); // this will call then
  } else {
    reject("Bad weather, so no Date"); // this will call catch
  }
});

// example - using the above promise
date
  .then((done) => {
    console.log("We are going on a date!");
    console.log(done);
  })
  .catch((error) => {
    console.log(error.message);
  });



