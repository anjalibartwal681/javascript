class  A{
    a=100;
    display(){
        console.log(this.a)
    }
}


class  B extends A{
    b=200;
show(){
        console.log(this.b)
    }
}

obj= new B()
obj.display()
obj.show()
