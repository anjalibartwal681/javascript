const a = ["mumm", "boy"];
const b = ["mumm", "boy"];
const c = ["allien", "line"];
const d = ["vooodo", "vooo"];

const abc = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(abc(a[0], b[0]));
console.log(abc(b[0], c[0]));

***************************************************************************************************
    const a = ["mumm", "boy"];
const b = ["mumm", "boy"];
const c = ["allien", "line"];
const d = ["vooodo", "vooo"];

const abc = (arr1,arr2) => {
let find=false
    arr1.map((item1) => {
     arr2.map((item2)=>{
         if(item1===item2){
         find = true    
         }
     });
    
    });
  return find
}

console.log(abc(a,b));
// abc(b);
// abc(c);
// abc(d);

// *********************************************


const a = ["mumm", "boy"];
const b = ["mumm", "boy"];
const c = ["allien", "line"];
const d = ["vooodo", "vooo"];

const abc = (arr1, arr2) => {
    let find = false;
    arr1.forEach((item1) => { 
        arr2.forEach((item2) => { 
            if (item1 === item2) { 
                find = true; 
            }
        });
    });
    return find; // Return the boolean indicating if any matches were found
}

console.log(abc(a, b)); // Output: true (since "mumm" is present in both arrays)
// abc(b);
// abc(c);
// abc(d);











