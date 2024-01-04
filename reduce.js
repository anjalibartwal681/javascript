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




