// string  indexing
let firstname ="anjali";
 // a n j a l i
 // 0 1 2 3 4 5
console.log(firstname[4]);

// length of  string
//  first name .length
console.log(firstname.length-1)
//last index: length -1
//trim()
//toUppercase()
//toLowercase()
//slice()
 let name="aNjali       "

//  name=name.trim()
//  console.log(name)
//  console.log(name.length)
name=name.toUpperCase();
name=name.toLowerCase();
 console.log(name)
 //slice()
 
 //start index;
 //end index;
 //The slice() method returns selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.

//The slice() method does not change the original array.


  let newstring = name.slice(0,3)// it will not include 4rth and last one
name=name.trim()
  console.log(newstring)
