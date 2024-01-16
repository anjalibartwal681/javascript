In JavaScript, the setTimeout() function is utilized to introduce a delay or to execute
    a particular function after a specified amount of time has passed. It is part of the Web APIs provided by browsers and Node. 
    js, allowing asynchronous execution of code.8


function a(){
    console.log("hi")
  
    setTimeout(()=>{
        console.log("im good")
    },2000)
      b()
      console.log("imbambmnknv")
    
}
function b(){
    console.log("hit")
}
a()
