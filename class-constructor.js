class ClassName {
  constructor() { ... }
}

The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.



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
----------------------------------------------------------------------------------------------------------------------------------------
 //inheritance
  class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
class b extends Car
{
    display()
    {
        console.log(this.name,this.year);
        
    }
}
const ob=new b("ford",2014);
ob.display();
