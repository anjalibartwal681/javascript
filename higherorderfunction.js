function higherOrderFunction(callback) {
  console.log('Performing some operation...');
  callback();
}

function callbackFunction() {
  console.log('Callback executed!');
}

higherOrderFunction(callbackFunction)
