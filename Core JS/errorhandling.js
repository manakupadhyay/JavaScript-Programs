// error handling - try, catch and finally

// try-catch block
try{
    console.log('before unnamed vairbale')

    unnamedvariable     // it'll generate an error

    console.log('it will not be executed')
}catch(err){
    // console.log(err)
    console.log('error occured');
}

// err object
try{
    console.log('before unnamed vairbale')
    unnamedvariable
    console.log('it will not be executed')
}catch(err){
    console.log('error occured')
    console.log(err.name)       // error name
    console.log(err.message)    // textual message about error
    //console.log(err.stack)      // used for debugging purpose
}


// throwing an error
try {
    console.log('we can also throw an error')
    throw new Error('just for fun')
} catch (error) {
    console.log(error.message)
}

// using finally
try{
    console.log('we can also throw an error')
    throw new Error('just for fun')
}catch(error){
    console.log(error.message)
}finally{
    console.log('it will be exceuted always');
    
}