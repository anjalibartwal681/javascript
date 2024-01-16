// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// In this example, the await keyword is used to pause the execution of exampleAsyncFunction 
//   until the Promise (simulating an asynchronous operation) is resolved.
//     This doesn't block the entire program; other tasks can continue to execute while
//     waiting for the asynchronous operation to complete.

async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("watashi!!");
  });
    a= await myPromise  //  a =  myPromise.then(res=>{
 console.log(a)//      console.log(">>>",res) //  });

}
 
 myDisplay() // output watashi!!





 
 // we use await cause when we use lots of then .then it becomes callback hell so we use  async  await 
 // javascript   .
 //settimeout send the request to the browser 

---------------------------------------------------------------------------------------------------------------------------------------------------------------

let empty_tank = function(){

    return new Promise(function(resolve,reject){

         resolve("The car doesn't have enough fuel.")

     })

 }
 let engine = function(msg){

     return new Promise(function(resolve,reject){

         resolve(msg + "The engine is over heating.")

     })

 }

 let travel = function(msg){

     return new Promise(function(resolve,reject){

         resolve(msg + "The car is not safe for driving.")

     })

 }

 const myCar=async()=>{

 

const tankResult=await empty_tank();
const engineResult= await engine(tankResult)
const travelResult= await travel(engineResult)
console.log("Done all promises",travelResult)
// empty_tank().then(function(result){

//      return engine(result)

//  }).then(function(result){

//      return travel(result)

//  }).then(function(result){

//      console.log("Done!" + result)

//  })

 }
 myCar()
function greet(){
    return emp = new Promise((resolve, reject)=>{
        resolve("anata o genki desu ka")})
        
    }
    
    const ngreet =async()=>{
    let c = await greet()
    console.log(c)
        
    }
    ngreet()// output      anata o genki desu ka
      .........................................................................

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
      console.log('hello world');
    
}

// calling the async function
asyncFunc();

async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("watashi!!");
  });
//  a =  myPromise.then(res=>{
//      console.log(">>>",res)
//  });

a= await myPromise
 console.log(a)}
 myDisplay()
 // we use await cause when we use lots of then .then it becomes callback hell so we use  async  await 
 // javascript   .
 //settimeout send the request to the browser 




