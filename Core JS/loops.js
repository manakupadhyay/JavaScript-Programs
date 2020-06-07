// loops in js - for, while, do-while, for-each, for-of

const arr = [1,2,4,6,12,20]

// for loop
console.log('for loops')
for(let i = 0; i < arr.length; i++)
    console.log(arr[i]);

let i = 0

// while loop
console.log('while')
while(i < arr.length){
    console.log(arr[i])
    i++
}

// do-while loop: it is always executed at least once
console.log('do-while')
i = 0
do{
    console.log(arr[i])
    i++
}while(i < arr.length)
    

// for-each loop - it takes each element one by one for the array
console.log('for-each loop')
arr.forEach(element => {
    console.log(element)
});

// for...of loop - it is a simplified version of for loop
console.log('for...of')
for (const value of arr) {
    console.log(value)
    
}