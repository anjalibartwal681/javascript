let myPromise = new Promise((resolve,reject)=>{
    let data=10
    if(data){
        resolve("data exhist");
    }
    else{
        reject("data doesn't exhist");
    }
    
})
 myPromise 
 .then((result)=>{
     console.log(result);
 })
 
 .catch((error)=>{
     console.log(error);
 });
 


--------------------------------------Promise chaining--------------------------------------------------------------------------
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 1000);
});

promise
  .then(function (result) {
    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result+1;
  })
  .then(function (result) {
    alert(result) // 16
    return result
  });









let car = new Promise(function(resolve,reject){

fuel_fullTank = false;

           if(fuel_fullTank)

           resolve()

     else

                 reject()

             });

  car.then(function(){

       document.write("The fuel tank is full. Happy Driving!!")

}).catch(function(){

             document.write("The fuel tank is  empty.")

})
