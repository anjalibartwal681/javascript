//reduce method
// reduce method  return single value accumulated result
//it doesn't change the original array


const numbers = [175, 50, 25];
a = numbers.reduce(myFunc);
console.log(a)
console.log(numbers)
function myFunc(total, num) {
    console.log(total,num) /// output //175 50
                                     // 125 25
                                     // 100
                                                                  
  return total - num;
}




//reduce method
let numbers=[1,2,3,4,5,9,10]


const  sum = numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
})
console.log(sum)

//reduce method
let numbers=[1,2,3,4,5,9,10]


const  sum = numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},100)// we can pass initial value
console.log(sum)

const usercart=[{productid:1,product:"mobile",price:120000},
{productid:1,product:"mobile",price:120000},
{productid:1,product:"mobile",price:120000},]
const totalamt=usercart.reduce((total,product)=>{
    return total+product.price
},0)
console.log(totalamt)
