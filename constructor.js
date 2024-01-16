In JavaScript, constructors are functions that are invoked using the new keyword. They are typically used to initialize object properties. Here's an example:function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Creating an instance of Car using the constructor
var myCar = new Car('Toyota', 'Camry');
