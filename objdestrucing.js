//object  destructing 
const band={ bandName:"donata",famouseSong:"stairway to haven",palce:"haven"
    };
// let bandName=band.bandName
// let famouseSong =band.famouseSong
// console.log(bandName,famouseSong)
let{bandn,famesong}=band///we cant giv another name 
//we can
let{bandName:var1,famouseSong,...rest}=band
console.log(var1,famouseSong,rest) 


