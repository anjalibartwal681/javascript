<!DOCTYPE html>
<html>
<head>
  <style>
    body{
      width:100%;
      
    }
    .tp-div{
    
  display: flex;
  justify-content: center; 
  align-items: center; 
}

    
       
    .top-div{
   padding: 20px 20px;
    margin:20px 20px;
    background-color:#ffff;
    box-shadow:0 4px 40px #0000001a;
    width:40%;
    height:450px;
    
   align-items: center;
   border-radius: 18px ;
    }
    
.inpu{
  margin-left: 30px;
 color: #6b7280;
 width: 90%;
 border: 1px solid #d1d5db;
 height: 40px;
}
#sub{
 background:  linear-gradient(to left,#fc68a5 50%,#e83981 50%);
 background-position: left bottom;
 background-size:200% 100%;
 transition: all .5s ease-out;
 color:#fff;
 background-color: #e83981;
width:130px;
height: 50px;
border: none;
}
.form-d{
  display: flex;
  margin-bottom: 2%;


}
  </style>
</head>


<body>


<!-- <h2>Store and retrieve data from local storage.</h2>
<p id="demo"></p>

<script>
// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
</script>--->

<div class="tp-div">
 <div class="top-div">
  <h2 style="text-align: center;">Contact Us</h2>
<form action="#"name="userinfo" onsubmit="return validfun()">
<div class="form-d">
   <input  placeholder="Your Name"  id="info" type="text" name="info1" class="inpu"/><br><br><br>
    
    <input  placeholder="Your Number "  id="info" type="number" name="info1" class="inpu"/><br><br>
  </p></div>
    <p id="validmsg" style="color: brown;"></p>
  <input  placeholder="Your Email"  type="email"  id="email" name="info1" class="inpu" /><br><br>
    <p id="emailerror" style="color: brown;"></p>
     <!-- first Name:<input  id="info"  type="text" name="info1"/><br><br>
     <p id="validmsg" style="color: brown;"></p> -->
  <input placeholder="Your password"  id="pass"  type="text" name="info1"  class="inpu" />
   <p id="passerror" style="color: brown;"></p>
     <input type="submit" id="sub" value="Submit"  style="margin-top: 20px;margin-left: 40%;">     

     </form>
 </div></div>
     <script>
        let flag=1;
  console.log(flag)
     
       function validfun(){  
      
        let a= document.userinfo.info.value;
        
        console.log(a)
    if(a ==""){

        // console.log(a)
     
       document.getElementById("validmsg").innerHTML="Name must be filled out";

    flag=0;
   
    }
    else if(info.value.length<3){
      document.getElementById("validmsg").innerHTML="name should should be minimum 3 character";
      flag =0;
    }
  
    else{
      document.getElementById("validmsg").innerHTML="" 
    }

    if(email.value==""){
      document.getElementById("emailerror").innerHTML="email is empty"
    }
else if(email.value.length<5){
  document.getElementById("emailerror").innerHTML="email should be @.com";
}
    if(pass.value==""){
document.getElementById("passerror").innerHTML="password is empty";    
flag=0}
else if(pass.value.length<8 ){
  document.getElementById("passerror").innerHTML="password should be minimum 8 character"
}



}

       
     </script> 


     <!-- <!DOCTYPE html>
     <html>
     <head>
     <script>
     function validateForm() {
       let x = document.forms["myForm"]["fname"].value;
       if (x == "") {
        console.log(x)
         alert("Name must be filled out");
         return false;
       }
     }
     </script>
     </head>
     <body>
     
     <h2>JavaScript Validation</h2>
     
     <form name="myForm" action="" onsubmit=" validateForm()" >
       Name: <input type="text" name="fname">
       Name: <input type="text" name="fname">
       Name: <input type="text" name="fname">
       <input type="submit" value="Submit">
     </form> -->
     
     </body>
     </html>
     
