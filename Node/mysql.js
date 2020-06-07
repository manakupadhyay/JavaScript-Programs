const mysql = require('mysql')

// create a connection
const options = {
    user: 'manak',
    password: 'manakpassword',
    database: 'dbName'
}
const connection = mysql.createConnection(options)

// connect
connection.connect((err) => {
    if(err){
        console.log('Error is connecting!')
        throw err
    }
    console.log('Successfully connected')
})

// select query
connection.query('select * from myTable' , (err, myTable, fields)=>{    // myTable contains the results
    if(err){
        console.log('Error occured while executing the query!')
        throw err
    }
    console.log(myTable)
})

// select query with paramters
const id = 223
const author = 'Manak'
connection.query('SELECT * FROM todos WHERE id = ? AND author = ?', [id, author], (error,
result, fields) => {
if (error) {
console.error('An error occurred while executing the query')
throw error
}
console.log(result)
})

// insert query
const todo = {
    thing: 'Buy milk'
    author: 'Manak'
}

connection.query('INSERT INTO todos SET ?', todo, (error, results, fields) => {
    if (error) {
        console.error('An error occurred while executing the query')
        throw error
    }
    // resultId contains the id of newly inserted key
    let id = results.resultId
    console.log(id)
})

// close the connection
connection.end()