//some method
//ak bhi value exist krti h to
// const arr=[3,3,5,5,7,9]
// ans=arr.some((number)=>number%2==0)
// console.log(ans)

const usercart=[{
    productId:1,productName:"mobile",price:12000},
   { productId:2,productName:"tv",price:15000},
    {productId:3,productName:"mle",price:180000},
]
 const ans=usercart.some((caritem)=>caritem.price>100000)
 console.log(ans)
