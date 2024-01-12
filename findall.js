// find  method
//find() method find the value that passes the test
//find() method call the function for each array element
//find() methoid retun undefined if no element find
//find() method  doesn't change original array
//find() method doesn't excute the function for empty element
<p id="demo"></p>

<script>
const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 10;
}
</script>
