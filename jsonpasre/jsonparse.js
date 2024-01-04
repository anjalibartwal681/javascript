//JSON.parse()
//json.parse we use to intechange the data in the form of javascript object
//whenever we recieve data in the from of string and we canvert it in the form of object so we use JSON.parse()
const text='{"name":"anjarirhns","city":"rishikes","work":"shigoto"}'

obj=JSON.parse(text)
console.log(obj)
obj1=JSON.stringify(obj)
console.log(obj1)
// stingify array

arr=['mahi',"tomi","chan","kun","jin"]
arr1=JSON.stringify(arr)
console.log(arr1)

