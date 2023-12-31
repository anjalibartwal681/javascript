//nested destructuring
//inside array
const user=[{userid:"001",userName:"anjali",userl:"rhn"},
{userid:"002",userName:"anshika",userl:"rhn"},
{userid:"003",userName:"aka",userl:"rkh"}]
const[{userName:user1firstname,userid:id},,{userl:user3l}]=user
console.log(user1firstname,id,user3l)
// console.log(userl)
