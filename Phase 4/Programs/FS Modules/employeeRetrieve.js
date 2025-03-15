let fs = require("fs");
//let data = fs.readFileSync("emp.txt");
//console.log(data);//buffer format

let empString = fs.readFileSync("emp.txt","utf-8")
console.log(empString);//string format
console.log("id is "+empString.id+" name is "+empString.name+" age is "+empString.age); //undefined undefined undefined
// JSON.parse help to convert string to json format
let empJson = JSON.parse(empString);  // convert object to json format
//console.log("emp in json format ");
//console.log("emp id "+empJson.id+" emp name "+empJson.name+" emp age "+empJson.age);   