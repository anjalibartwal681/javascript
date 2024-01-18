//protected  class _
// we can access the properties inside its  next class child class


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
-------------------------------------------------------------- private class #----------------------------------------------------------------------
//we can  can't acess and inherit the method and properties inside child class  
  class Myclass{
    #prvariable=[1,2,3,4,5,6]
    
    display(){
   const  value =  this.#prvariable;
  const result=   value.map((value)=>{
          return value+1
           
      })
     console.log(result)
    }
    
    
    
} 

ob= new Myclass()
ob.display()






  


