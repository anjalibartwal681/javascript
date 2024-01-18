// throw new Error() statement is commonly used to create and throw custom errors. 


function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  const result = divideNumbers(10, 2);
  console.log("Result:", result);
  
  // Uncomment the line below to trigger the custom error
  // const errorResult = divideNumbers(5, 0);
} catch (error) {
  console.error("Error:", error.message);
}
