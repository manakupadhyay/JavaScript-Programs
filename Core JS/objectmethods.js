// object methods - when is function is declared inside an object it is called a method

const car = {
    brand: 'Suzuki',
    model: 'Baleno',
    // start is the name of the method
    start: function(par1) {
    // a method can access the properties of an object using this keyword
    console.log(par1 + ' Started ' + this.brand + this.model )
    }
}
car.start('shit')

const car2 = {
    brand: 'Toyota',
    model: 'Fortuner',
    // arrow function - we don't have access to this operator if we use an arrow function.
    // because ARROW FUNCTIONS ARE NOT BOUND TO THE OBJECT
    // that's why regular functions are often used as object methods.
    start: (par1) => {
        // console.log('Started'  + this.brand + this.model ) - this won't work
        console.log('started');   
    }
}
car2.start('shit')