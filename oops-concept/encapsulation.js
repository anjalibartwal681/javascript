class  student{
    constructor(){
       let name;
       let marks ;
    }
    getName(){
        return  this.name;
    }
    setName(name){
        this.name = name;
    }
    
    getMarks(){
        return this.marks
    }
   setMarks(marks){
       this.marks = marks
   } 
    
    
}
let stu=new student()
stu.setName("john");
stu.setMarks("90")
console.log(stu.getName(),stu.getMarks())








