let fs = require("fs");
let emp = {id:100,name:"Ravi",age:21};  // literal type object 
console.log("emp in literal format ");
console.log(emp.id+" "+emp.name+" "+emp.age);
// convert object to string format 
let empString = JSON.stringify(emp);
console.log("emp in string format ");
console.log(empString.id+" "+empString.name+" "+empString.age);
// JSON.parse help to convert string to json format
let empJson = JSON.parse(empString);  // convert object to json format
console.log("emp in json format ");
console.log("emp id "+empJson.id+" emp name "+empJson.name+" emp age "+empJson.age);    
fs.writeFileSync("emp.txt",empString);    