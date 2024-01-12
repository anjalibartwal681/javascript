const usercart=[{
    productId:1,productName:"mobile",price:12000},
   { productId:2,productName:"tv",price:15000},
    {productId:3,productName:"mle",price:18000},
]
 const ans=usercart.every((caritem)=>caritem.price<20000)
 console.log(ans)
