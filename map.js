// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.
  let arr=[10,20,30,40]
let narr= arr.map(function(value){
    console.log(value)
})

//for each
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
//The forEach() method calls a function for each element in an array.



//map
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 10;
}



