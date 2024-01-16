function  greet(greeting){
    console.log(greeting +'\n'+this.name)
}
var person1={name:'alice'}
var person2={name:'eli'}

greet.call(person1,"hii")
greet.apply(person2,["helo"])
greetperson1= greet.bind(person1)
greetperson1("hii")





bind method:

It returns a new function with the same body as the original function but with a fixed this value. 
    It does not invoke the function immediately.
