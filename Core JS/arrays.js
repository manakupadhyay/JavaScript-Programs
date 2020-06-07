// working with arrays - arrays are objects

// define-1: using literals
let array = [2,4,6,8,10] 

// define-2: using array constructor
let array2 = new Array(4,12,11,10)     
console.log(array2)

// length of the array
console.log(array.length)

// type of array - return object
console.log(typeof array);


// adding an element to the last
array.push(12)
console.log(array)

// adding an element at the first position
array.unshift(0)
console.log(array)

// removing an element from the end
array.pop()
console.log(array)

// removing an element from first posistion
array.shift()
console.log(array);


// js array can contain values of any type
let array3 = [4,'manak', false, 10, 'upadhyay']
console.log(array3)

// using [] operator

// gives the element at index 1
console.log(array3[1])           

// returns the element at last index
console.log(array[array.length-1])


// joining arrays - a.concat(b,[...])
let array23 = array2.concat(array3)
console.log(array23);

// includes - it return true if array containes specified value, else false.
console.log(array.includes(0))

// reverses the array
array23.reverse()
console.log(array23);

// toString - converts an array to string seperated by commas
let strArray = ['manak', 'upadhyay', 'likes', 'reading', 'books']
console.log(typeof strArray)

strArray = strArray.toString()

console.log(typeof strArray)
console.log(strArray);







