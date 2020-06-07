// strings in js

// creating a string - using string literal
let s1 = "Manak Upadhyay"
console.log(s1)

// creating a string - using string object
let s2 = new String("Manak Upadhyay")
console.log(s2)

// accessing characters of a string
console.log(s2[1])

let s3 = "hey there, what's up?"

// == operator
if(s1 == s2)
    console.log('== return true if values are equal')
else
    console.log('values not equal')

// === operator
if(s2 === s1)
    console.log('=== return true if values and type are equal')
else
    console.log('values and type not equal')
 
// length of a string
console.log(s3.length)

// indexOf()
console.log(s3.indexOf('up'))

// substring(start, end)
let s4 = s3.substr(0,10)
console.log(s4)

// concat() 
s3 = s3.concat(s1)
console.log(s3)

// trim()
let str1 = "     Manak"
console.log(str1)
str1 = str1.trim()
console.log(str1)

// trimStart()- trims from the start and trimEnd()- trims from the end
let trimStr = '   Manak   '
trimStr = trimStr.trimStart()
let trimStr2 = '   upadhyay   '
trimStr2 = trimStr2.trimEnd()
console.log(trimStr)
console.log(trimStr2)



// replace(oldValue, newValue)
s3 = s3.replace('there', 'everyone')
console.log(s3)

// repeat(num)
let repeatStr = 'Ho'
repeatStr= repeatStr.repeat(4)
console.log(repeatStr)


// charAt()
console.log(s3.charAt(0))

// multiline strings
const multiline = `hey
there
my name
is Manak`
console.log(multiline)

// interpolation - the insertion of something of a different nature into something else
//  by using ${...}, we can add anything, even expressions.
const age = 19
const str = `I am ${age} years old.`   
console.log(str)
const string = `something ${1 + 2 + 3}`
console.log(string)






