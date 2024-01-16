// computed  properties 
const key1="objectkey1"
const key2="objectkey2"

const value1 ="myvalue1";
const value2="myvalue2";
//  const obj={
//      objkey1 :"myvalue1", objectkey2:"mayvalue2"
//  }

 
 
//  const obj={
//      [key1] : value1, 
//      [key2] : value2
//       }
//   console.log(obj)


const obj={};
obj[key1]= value1;
obj[key2]= value2;
console.log(obj);

// Define an object
let personObject = {
  name: "John Doe",
  age: 25
};

// Function that takes an object as an argument
function printPersonInfo(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Call the function and pass the object as an argument
printPersonInfo(personObject);














