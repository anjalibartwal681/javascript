//filter 
//filter method  doesn't change original array 
// filter  method creates new array which satisfy the condition

let a=[2,15,3,4,67,78]
b=a.filter(checkvalue)
console.log(b)
function checkvalue(value){
    return value<=10
    
}



function a(){
    console.log("hii")
}

setTimeout(a,3000)
