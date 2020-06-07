//An async function is a modification to the syntax used in writing promises. You can call 
// it syntactic sugar over promises. It only makes writing promises easier.

// An async function returns a promise -- if the function returns a value, the promise will be 
// resolved with the value, but if the async function throws an error, the promise is rejected with that value

async function myRide() {
    return '2017 Dodge Charger';
}

// the above code is same as: 
// function yourRide() {
//     return Promise.resolve('2017 Dodge Charger');
// }

// rejecting a promise
async function foo() {
    throw 25;
}
  
// the above code is equal to
// function foo() {
//     return Promise.reject(25)
// }
  
// Await is only used with an async function. The await keyword is used in an async function to ensure 
// that all promises returned in the async function are synchronized
// It eliminates the use of callbacks in .then() and .catch(). In using async and await, async is prepended
//  when returning a promise, await is prepended when calling a promise.
 
// try and catch are also used to get the rejection value of an async function.

console.log('First')


async function fun(){
    try {
        let value = await ('Promise 1')
        //let value2 = await ('Promise 2')
        console.log(value)        
    } catch (error) {
        console.log('If promise got rejected, this will be executed')
    }
}
fun()

console.log('Second')



/*
    The async keyword before a function has two effects:
      1.  Makes it always return a promise.
      2.  Allows await to be used in it.
    The await keyword before a promise makes JavaScript wait until that promise settles, and then:
      1.  If it’s an error, the exception is generated — same as if throw error were called at that very place.
      2.  Otherwise, it returns the result.
*/