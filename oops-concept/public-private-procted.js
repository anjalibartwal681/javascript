class MyClass {
  _privateVariable = 42;

  getPrivateVariable() {
    return this._privateVariable;
  }
}
class Myprotect extends MyClass{


  getPrtect() {
    return this._privateVariable;
  }
}


// const myInstance = new MyClass();
// console.log(myInstance.getPrivateVariable()); // This is allowed
// This would result in an error
const myprotect = new Myprotect()
console.log(myprotect.getPrtect());


