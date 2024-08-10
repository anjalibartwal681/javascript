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
// Abstraction of a car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  // Abstraction of driving
  drive() {
    
    this.speed = 10;
    
    
    if (this.speed == 10){
        console.log(`The ${this.make} ${this.model} is now driving.`);
    }
    
    
    else{
        console.log(`The ${this.make} ${this.model} is not driving.`)
    }
    
    
    
    
  }

  // Abstraction of turning
  turn(direction) {
    console.log(`The ${this.make} ${this.model} is turning ${direction}.`);
  }

Speed(){
    this.speed=40
    
    if(this.speed===40){
                console.log(`The ${this.make} ${this.model} increse the speed.`)

    }
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
myCar.Speed()







class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }


 dive(){
    this.speed=10;
    if(this.speed==10){
        console.log(`the ${this.make}${this.model} is now driving.`);
    }
      else{
       console.log(`The ${this.make} ${this.model} is not driving.`)
    }}}
    const myCar=new Car('TOYota','Camry');
    myCar.dive();
