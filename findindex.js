// he findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

let b=[1,3,4,5,7]

let c=b.findIndex((value)=>{
  return  value<5;
})

console.log(c)

  
