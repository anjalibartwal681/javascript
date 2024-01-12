// indexof doesn't change the original array
//indexof method returns -1 if values not found

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

document.getElementById("demo").innerHTML = index;
</script>



<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", -1);//-1 found from last
                                                                //  output 4 
document.getElementById("demo").innerHTML = index;
</script>

