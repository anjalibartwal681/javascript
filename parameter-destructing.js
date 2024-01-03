//parameter destructing
//object
//react

const  person={
    name:"anjali",age:"24",  
}
function  printdetails({name,age}){
    console.log(name)
    console.log(age)
}
printdetails(person)
