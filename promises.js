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
