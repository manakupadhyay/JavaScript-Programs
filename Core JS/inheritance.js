// inheritance - A class can extend another class, and objects initialized using that class
// inherit all the methods of both classes.

// base class
class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  // derived class - it inherites all the methods of base class
  class Rabbit extends Animal {
      // method of derived class
    hide() {
      alert(`${this.name} hides!`);
    }
    // overriding
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide 
    }
  }
  // rabbit has access to methods of Rabbit class and Animal Class
  // in the below expression, it calls the constructor of base class
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White rabbit hides!