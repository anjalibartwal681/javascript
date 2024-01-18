// Constructor function
function MyClass(value) {
    // Creating a property using 'this'
    this.myProperty = value;

    // Creating a method using 'this'
    this.displayProperty = function() {
        console.log(this.myProperty);
    };
}

// Creating an instance of MyClass
var myObject = new MyClass("Hello, world!");

// Accessing the property and calling the method using 'this'
console.log(myObject.myProperty);  // Outputs: Hello, world!
myObject.displayProperty();   
