let a = [1,2,3,4];
let b = a.forEach(function(el){
    console.log(el*2);
    // return el*2;
})
console.log(a)
console.log(b)
// it doesnt return values  it jut itrate the  element

///map


let a = [1,2,3,4];
let b = a.map(function(el){
    console.log(el*2);
    return el*2;
})
console.log(a)
console.log(b)
// it always return the value 
