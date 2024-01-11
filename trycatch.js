someFunction=()=>{
    console.log("anjali san wa")
}


try {
    // Code that may throw an exception
    let result = someFunction();
    console.log(result);
} catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
} finally {
    // Code that will be executed regardless of whether an exception occurred or not
    console.log("Finally block executed");
}
