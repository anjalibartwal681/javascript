// function  inside function
function app(){
    const myfunc=()=>{
        console.log("hello world")
    }
    const addTwo=(num1,num2)=>{
        return num1+num2
    }
    const mul=(num1,num2)=>{
        return num1*num2
    }
    myfunc()
    console.log(addTwo(2,3))
     console.log(mul(2,3))
}
app()
