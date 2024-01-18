//abstraction means to hide unnecessary information from user to  show only essential information which is useful  for user  end  
// eg how a car enging is  working  user doesn't know about inner functionality


// Abstraction of a car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  // Abstraction of driving
  drive() {
    console.log(`The ${this.make} ${this.model} is now driving.`);
    this.speed = 60;
  }

  // Abstraction of turning
  turn(direction) {
    console.log(`The ${this.make} ${this.model} is turning ${direction}.`);
  }

  // Abstraction of stopping
  stop() {
    console.log(`The ${this.make} ${this.model} has stopped.`);
    this.speed = 0;
  }
}

// Creating a car instance
const myCar = new Car('Toyota', 'Camry');

// Using the abstraction
myCar.drive();
myCar.turn('left');
myCar.stop();
