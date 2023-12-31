//spread operator in array
// merge array
const array1 = [1,2,3]
const array2= [5,6,7]
newArray =[...array1, ...array2, 89,68,70]
console.log(newArray)
//output
//[
//   1,  2,  3,  5, 6,
//   7, 89, 68, 70
// ]


arr2=[..."123456789"]
console.log(arr2)
//output
// [
//   '1', '2', '3',
//   '4', '5', '6',
//   '7', '8', '9'
// ]

// spread operator in object
const obj1= {
    key1:"value1",
    key2:"value2"
};
console.log(obj1)

const obj2= {
    key1:"value3",
      key3:"value3",
    key4:"value4"
};
console.log(obj2)
//  const newobj={...obj1,...obj2}
  const newobj={...obj1,...obj2,key56:"value"}

 console.log(newobj)
 //output
//  { key1: 'value1', key2: 'value2' }
// { key1: 'value3', key3: 'value3', key4: 'value4' }
// {
//   key1: 'value3',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
//   key56: 'value'
// }
newobj1={..."abcdefghijklmnopqrstuvwxyz"}
console.log(newobj1)

//output
{
  '0': 'a',
  '1': 'b',
  '2': 'c',
  '3': 'd',
  '4': 'e',
  '5': 'f',
  '6': 'g',
  '7': 'h',
  '8': 'i',
  '9': 'j',
  '10': 'k',
  '11': 'l',
  '12': 'm',
  '13': 'n',
  '14': 'o',
  '15': 'p',
  '16': 'q',
  '17': 'r',
  '18': 's',
  '19': 't',
  '20': 'u',
  '21': 'v',
  '22': 'w',
  '23': 'x',
  '24': 'y',
  '25': 'z'
}






