//lexical scope

var globalvar="genki";
function outerfunction(){
    localvar="anata";
    function innerfunction(){
        
        console.log(localvar)
    }
    console.log(globalvar)
   innerfunction()
}
outerfunction()
