class MyClass {
  // No constructor defined

  setValues(value1, value2) {
    this.property1 = value1;
    this.property2 = value2;
  }
}

// Create an instance of MyClass
const myObject = new MyClass();
// Assign values using the setValues method
myObject.setValues("Hello", 42);
------------------------------------------------------------------------------------------------------------------------------------------
  class MyClass {
  constructor(value1, value2) {
    this.property1 = value1;
    this.property2 = value2;
  }
}

// Create an instance of MyClass with values
const myObject = new MyClass("Hello", 42);
