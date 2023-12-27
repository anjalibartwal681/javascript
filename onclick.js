<!DOCTYPE html>
<html>
<body>

<h1>The Document Object</h1>
<h2>The removeEventListener() Method</h2>

<p>A mousemove event handler displays a random number every time you move your mouse in this document.</p>

<p>Click "Remove" to remove the event handler.</p>


<p id="demo"></p>

<script>
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "resjkbhjkls"
}

function removeHandler() {
  document.removeEventListener("click", myFunction);
}
</script>

</body>
</html>
