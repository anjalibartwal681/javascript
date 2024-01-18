polymorphism allows you to use a single function or method name to perform different actions 
    based on the types of arguments or objects involve
 polymorphism refers to the ability of a single function or method to work with different types of objects or data.
 ex -   dr who cure nose as well as ear and throat

class Shape {
    draw() {
        console.log('Drawing a generic shape');
    }
}

class Circle extends Shape {
    draw() {
        let arr=[5,6,7,8,9,]
    let  c=arr.reduce((accumu,total)=>{
          return accumu+total
      })
       console.log(c)
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}

circle= new Shape()
circle.draw()
circle= new Circle()
circle.draw()



 



class shape(){
    draw(){
        return "im genric shape"
    }
}

class square extends shape{
    draw(){
        return "im square"
    }
}


class circle extends shape{
    draw(){
        return "im circle"
    }
}

ob= new shape()



