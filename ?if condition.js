<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Operators</h1>
<h2>The ?? Operator</h2>
<p>The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second.</p>

<p id="demo"></p>

<script>
let name = null;
let text = "missing";
let result = name ?? text;
document.getElementById("demo").innerHTML = "The name is " + result; 
</script>

</body>
</html>
