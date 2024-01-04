<button onclick="myStopFunction()">clickto Stop</button>

<script>
let setTime= setInterval(greetings,1000)

function greetings(){
    console.log("im")
}
 function myStopFunction() {
   clearInterval(setTime);
 }
</script>
