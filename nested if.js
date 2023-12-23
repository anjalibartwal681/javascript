// nested if else

//prompt get input  in string  use + before masg
let winningNumber = 20;
let userguess = +prompt("guess a number ")

if(userguess === winningNumber){
    console.log("your guess is right");
}
else{
    if(userguess<winningNumber ){
        console.log("too  law")
            }
            else{
                console.log("too high")
            }
}
