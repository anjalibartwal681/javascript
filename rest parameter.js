//rest parameter
function  myfun(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myfun(10,20,40,30,50,45,34,40)

function addAll(... numbers){
    let total=0;
    console.log(total)
    for(let  number of numbers){
        total=total+number
   
    }
    return total;
}
const  ans=addAll(4,5,4,10)
console.log(ans)



