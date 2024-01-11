
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




