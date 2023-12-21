// loops in js
let i=1;// i
// for(i=0;i<=10;i++){
//     console.log("im watashi");
// }


// while(i<20)
// console.log("giuniu");
//
do{

    console.log("itsumo")
    i++
}
while(i<=10)


// for in  i loop  we use for accesing the properties of an object and array
let person={fname:"mr mahabeer singh bartwal",mname:"mrs urmila  devi",add:"rishikesh"}
for(let values in person){
    if(values=='fname'){
        console.log(person[values])
    }
// console.log(person[values])

}

 const anjali={language:" eigo,nihongo", watashitachi:"we", kurasu:"bsc"}
 for(let values in anjali)
 {
    //   console.log(anjali[values])
        console.log(values)// for key
 }








// forech in built function we use in foreach
// let a =["anjali","rhn","sng"]
// a.forEach(function(value , index){
//     console.log( index,":",value)
// });

//  we can also asiign  it outside of function


let a =["anjali","rhn","sng"]
a.forEach(fun);


function fun(value , index){
    console.log( index,":",value)
}
