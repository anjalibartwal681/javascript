const obj={
    name:'Piyush',
    getName:function(){
        console.log(this.name)
        const innerArrow = ()=>{
            console.log("from arrow function",this.name)
        }
        innerArrow()
    },
    getNameArrow:()=>{
        console.log("from direct arrow",this.name)
    }
}
var tempFunction =obj.getName
// tempFunction()
obj.getName()
obj.getNameArrow()
