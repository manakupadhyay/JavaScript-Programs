// classes - classes are a way to define common pattern for multiple objects
// typeof class is function

class Animal {
    // constructor - used to initialize objects
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    // method (no need to use function keyword)
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    // setter
    set breed (value){
        this._name = value
    }
    //getter
    get breed(){
        return this._name
    }
    // method (no need to use function keyword)
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
     // static method - it is defined on class not on object
    static staticHi(){
        console.log('i am static method');
        
    }
  }

let animal = new Animal("Dog");
animal.run(10)
animal.stop()

// calling setter
animal.breed = "German Shephard"
// calling getter
console.log(animal.breed)
animal.run(20)

// accessing static method using class name
Animal.staticHi();
