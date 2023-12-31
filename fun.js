function sumThreeNumber(num1,num2,num3){
   return num1+num2+num3
}
// console.log(sumThreeNumber(4,5,2)) 11

storeinvar=sumThreeNumber(4,5,3) //12
console.log(storeinvar)

function Even(num){
//     if(num%2==0){
//     return true}
//     else {
//   return false
//     }
return num%2==0
    
}
console.log(Even(3))
//function
//input : array, taget(number)
//output: index of  target if present in array
function FindTarget(array,target ){
    for (let i =0;i<=array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
 const myarray=[1,3,4,6,8]
 const ans = FindTarget(myarray,8)
 console.log(ans)
