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



--------------------------------------------------------------------------------------------------------------------
class Counter {
  _count = 5; 
display()
{
    console.log(this._count);
}
}

class b extends Counter
{
    display1()
    {
        console.log(this._count);
    }
}
class c extends b
{
    display2()
    {
                console.log(this._count);
    }
}
const ob=new c();
ob.display2();
ob.display2();
ob.display();
 console.log(ob._count)







  


