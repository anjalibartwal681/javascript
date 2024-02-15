// its-prevent- cello  copy


let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

let newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee.ename="anjali";
newEmployee.salary=100000;

console.log(employee)
console.log(newEmployee)



