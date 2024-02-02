function higherOrderFunction(callback) {
  console.log('Performing some operation...');
  callback();
}

function callbackFunction() {
  console.log('Callback executed!');
}

higherOrderFunction(callbackFunction)


function higherOrderFunction(callback) {
    console.log("iam higherorder function");
    
    callback();
    
    console.log("Tasks after calling the callback");
}

// Define a callback function
function callbackFunction() {
    console.log("Callback function executed");
}

// Call the higher-order function with the callback
higherOrderFunction(callbackFunction);


