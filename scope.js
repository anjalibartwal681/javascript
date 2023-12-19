 types of scope variable


{// local scope
let a= 10;
    console.log(a)// local variable  let is local variable which we used inside a block.
}

// console.log(a)//  it will show error cause let is having block scope


function msg(){
var i = 10;/// function scope
console.log(i)
}
// console.log(i)/// it will show error cause having function scope
msg()


/// global scope

const x=10;/// global variable 
let y=10;
var z=10;// global variable   var is  global variable
function add(){
    sum=x+y+z;
    console.log(sum)
}
add();






