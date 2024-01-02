// block scope
//let and const are block scope cant acess outside of block

//var is function scope

if(true)
{
 let name="anjari"
    console.log(name)
}
// console.log(name)// error



function greet(){
    if(true){
  var a ="watashi no nmae wa anjali desu"
    console.log(a)
}
  console.log(a)
}
greet()
