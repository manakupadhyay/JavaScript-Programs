const fs = require('fs')

// open a file
fs.open('file.txt', 'w+', (err, fd)=>{
    if(err){
        console.log('error in opening file')
        return
    }
    // fd is filedescriptor
})

// read file
fs.readFile('./file.txt', (err, data) => {
    if(err){
        console.log('Error')
        return
    }
    console.log(data)
})

// get stats of a file
fs.stat('./file.txt', (err, stats) => {
    if(err){
        console.log('Error')
        return
    }
    console.log(stats)
})

// make a directory
fs.mkdir('manak', (err)=>{
    if(err){
        console.log('error')
        return
    }
})
// remove a directory
fs.rmdir('manak', (err)=>{
    if(err){
        console.log('error')
        return
    }
})

// // rename a file
// fs.rename('file.txt', 'file1.txt', (err)=>{
//     if(err){
//         console.log('error')
//         return
//     }
// })