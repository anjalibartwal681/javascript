
Introduction to Object Oriented Programming in JavaScript

As JavaScript is widely used in Web Development, in this article we will explore some of the Object Oriented mechanisms supported by JavaScript to get the most out of it. Some of the common interview questions in JavaScript on OOPS include:
Object	      Classes  	       Encapsulation
Abstraction 	Inheritance  	Polymorphism

let obj={
    name:"anjali",
    cls:"bscit",
    getfun:function(){
        return `${obj.name} done ${obj.cls}`
    }
};

console.log(obj.name)
console.log(obj.getfun())

Object: An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

Note: A Method in javascript is a property of an object whose value is a function. 

The object can be created in two ways in JavaScript:

Object Literal
Object Constructor
// Defining object
let person = {
	first_name: 'Mukul',
	last_name: 'Latiyan',

	//method
	getFunction: function () {
		return (`The name of the person is 
		${person.first_name} ${person.last_name}`)
	},
	//object within object
	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);
-------------------------------------------------------------------------------------------------------------------------------


  // Using a constructor
function person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);







// Object.create() example a
// simple object with some properties
const coder = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I 
			studying?: ${this.isStudying}.`)
	}
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();



--------------------------------------------------------------classes-----------------------------------------------------
	JavaScript Classes are basically a blueprint or template of the object. 
	JavaScript classes can be used to create new objects in Javascript.

The new version of JavaScript (ES6) introduced the use of classes instead of functions.
	Prior to ES6, there were only classes and, functions which are callable objects.

class emp { 
	constructor(name, age) { 
		this.name = name; 
		this.age = age; 

	} 
} 
const emp1 = new emp("Geek1", "25 years"); 
const emp2 = new emp("Geeks2", "32 years") 
console.log(emp1.name + " : " + emp1.age); 
console.log(emp2.name + " : " + emp2.age);
--------------------------------------------------------------------------------------------------------------------------------------
Abstraction: Abstraction means displaying only essential information and hiding the details.
	    Data abstraction refers to providing only essential information about the data to the outside world,
	      hiding the background details or implementation. 

Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation. 

	







