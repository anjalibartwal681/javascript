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

