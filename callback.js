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
</script>

</body>
</html>
