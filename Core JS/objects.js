// objects in js 

// creating an object - using object literal
const obj1 = {firstname: 'manak', lastname: 'upadhyay', age: 19} // (property, value)
console.log(obj1)

// creating an object - by using Object class
const obj2 = new Object()
obj2.firstname = 'manak'
obj2.lastname = 'upadhyay'
obj2.age = 19
console.log(obj2)

// creating an object - by using construtor
function Car(par1, par2, par3) {
    this.brand = par1
    this.model = par2
    this.price = par3
}
const car = new Car('audi', '2019', 4000000)
console.log(car)

// accessing the object using . (dot)
console.log(car.model)
console.log(obj1.lastname);

// accessing the object using [] square brackets
console.log(obj1['age']);
console.log(car['price']);

//  If you access an unexisting property, you'll get the undefined value
console.log(obj1.height)

// adding new property to an object using .
obj1.hobby = 'reading'
console.log(obj1)

// adding new property to an object using []
obj1['language'] = 'javascript'
console.log(obj1)
 
// deleting a property from an object
delete obj1['language']
delete obj1.hobby
console.log(obj1)

// Object.values() - This method returns an array containing all the object own property values.
console.log(Object.values(obj1))

// Object.entries() - This method returns an array containing all the object own properties, as an array of
// [key,value] pairs.
console.log(Object.entries(obj1))
