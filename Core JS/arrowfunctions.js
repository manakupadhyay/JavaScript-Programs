// arrow functions in js - Arrow functions are anonymous.
// Arrow functions can contain other arrow function, or also regular functions.

// regular defination of a function named 'fun1'
function fun1() {
}
// equivalent of above function using arrow function
() => {
}

// we can assign regular functions to a variable
let fun2 = function (par1) {
    console.log('assign regular fn to variable ' + par1)
}
// call the above function using that variable
fun2(10)

// similary, we can assgn arrow functions to a variable, Parameters are passed in the parentheses
let fun3 = (par1) => {
    console.log('assign arrow fn to a variable ' +  par1)
}
// call the above function using that variable
fun3(20)

// If the function body contains just a single statement, we can omit the
// parentheses and write all on a single line
let arrowfn = (par1) => console.log('hi, ' + par1)
arrowfn('manak')

//If you have one (and just one) parameter, you could omit the parentheses
//completely
let arrowfn2 = par1 => console.log('arrow functions are ' +  par1 +  ' awesome!')
arrowfn2('fucking')

/*
    Arrow functions allow you to have an implicit return: values are returned
    without having to use the
    return  keyword.
    It works when there is a on-line statement in the function body
*/
const getData = () => 'test'
console.log(getData())

// like regular functions ,we can have default parameters
const getData2 = (color = 'black',
age = 2) => {
    console.log(color + age);
}
getData2();
