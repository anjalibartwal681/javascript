const a =["mumm","boy"]
const b=["boy","oy"]
const c=(["allien","line"])
const d=(["vooodo","vooo"])
const abc=(arr)=>{
    const fword=arr[0]
    const sword=arr[1]
    for(i=0;i<sword.length;i++){
        var letters=sword[i]
        if(fword.indexOf(letters)===-1)
        return true
    }
    return false
}
console.log(abc(a))
console.log(abc(b))
console.log(abc(c))
console.log(abc(d))
