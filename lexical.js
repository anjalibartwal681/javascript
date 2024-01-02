//lexical  scope
function  myApp(){
    const  myvar="value1";
    function myfunction(){
        
    
 let   lexical=()=>{
        console.log("value is",myvar)
    }
    lexical()
}
    myfunction()
}
myApp()


