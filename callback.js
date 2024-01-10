<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>Function Sequence</h2>
<p>JavaScript functions are executed in the sequence they are called.</p>

  //A callback is a function passed as an argument to another function.
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
