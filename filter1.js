//filter method its return only boolean value
let numbers=[2,1,3,4,6,8,4]
// let even=(numbers)=>{
//     return numbers%2 !==0
    
// }
// const evennum=numbers.filter(even)
//     console.log(evennum)

const evennum=numbers.filter((number)=>{
    return number%2 !== 0
})
    console.log(evennum)

