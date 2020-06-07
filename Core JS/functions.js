// functions in js
// in js, Functions can be defined inside other functions
// in js, You can return a function from a function, too.


// defining a function
function fun(par1) {
    if(typeof par1 !== 'undefined')
        console.log('inside fun ' + par1)
    else
        console.log('inside fun ' + 'par1 is undefined');
        
}
// invoking the above function
fun()
fun('manak')


// if par3 is not given, it was use 10 as default (par3 is default parameter)
function fun2(par1,par2,par3=10) {  
    console.log(par1 + ' ' + par2 + ' ' + par3)
}
fun2(2,3)

// returning values from the funtions
function fun3(par1) {
    return par1*par1
}
const value = fun3(2)
console.log(value)

// we can also return strings, arrays, objects
function fun4(par1) {
    return {firstname: par1, lastname:  'upadhyay'}
}
console.log(fun4('manak'))

