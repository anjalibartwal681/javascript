<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>Function Sequence</h2>
<p>JavaScript functions are executed in the sequence they are called.</p>

  //A callback is a function passed as an argument to another function.


---------------------------------------------------------------------------------------------------------
function a() {
    console.log("hii");
}

function c(b, callback) {
    // b = "hru";
    console.log(b);
    callback();
}

// You should call function `a` directly, not assign it to `d`
a();

// You need to pass function `a` as a callback to function `c`
c(b="hru", a);
--------------------------------------------------------------------------------------------------------------


  function parentsname(){
     let fathername="mr mahabeer singh";
    let mothername="urmila devi"
    console.log(fathername,mothername)
    
    }
    
    
    function student(call){
        let name="rhn"
        console.log(name)
      
         call()
     
    }
      
    student(parentsname)
<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

// function myDisplay(value){
//     a= value
//     console.log(a)
// }

// function add(num1,num2){
//     sum=num1+num2;
//     return sum;
    
    
// }


// let result=add(5,5)
// myDisplay(result)

--------------------------------------------------------------------------------------------------------------------------------------------

function higherOrderFunction(callback,x,y) {
//   console.log('watashi no nmae wa anjari desu');
  callback(x,y);
}

function callbackFunction(x,y) {

 console.log(x+y);
}+

higherOrderFunction(callbackFunction,5,5)




</script>

</body>
</html>
