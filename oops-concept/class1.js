class createuser{
constructor(firstname, lastname, email, age, address) {
    console.log("cunstructor is called")
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
this.address = address;}

    abot(){
        return `${this.firstname} is ${this.age} years old.`;
    }
    is18(){
        return this.age>18;
    }

}
const user1 =  new createuser('anjali', 'bb', 'anjali@gmail.com',"24", 'rishikesh');// without new keywoed u can't invoke classconstructor
const user2 =  new createuser('ani', 'b', 'anjali@gmail.com',"1", 'dehradun');
console.log(user1);
console.log(user1.is18())
console.log(user2);
console.log(user2.is18())


