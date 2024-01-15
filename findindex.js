// indexOf()	The value of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()	The value of the first element that passes a test
// findIndex()	The index of the first element that passes a test
// findLast()	The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test





// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.


let b=[1,3,4,5,7]

let c=b.findIndex((value)=>{
  
  return  value<5;
})

console.log(c)




// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.

// The findLast() method does not execute the function for empty elements.

// The findLast() method does not change the original array.

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>The findLast() Method</h2>

<p>findLast() returns the value of the last element in an array that passes a test (provided by a function):</p>

<p id="demo"></p>

<script>
const ages = [3,40,50, 10, 18, 20,18,30];

document.getElementById("demo").innerHTML = ages.findLast(checkAge);

function checkAge(age) {
  return age > 18;
}
</script>



//   The findLastIndex() method executes a function for each array element.

// The findLastIndex() method returns the index (position) of the last element that passes a test.

// The findLastIndex() method returns -1 if no match is found.

// The findLastIndex() method does not execute the function for empty array elements.

// The findLastIndex() method does not change the original array.

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>findLastIndex()</h2>

<p>findLastIndex() returns the index of the last element that passes a test (provided by a function).</p>

<p id="demo"></p>

<script>
const ages = [3 ,70,10,20, 18,];

document.getElementById("demo").innerHTML = ages.findLastIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
</script>

<p>findLastIndex() is not supported in Internet Explorer.</p>

</body>
</html>















  










  
</body>
</html>







  
