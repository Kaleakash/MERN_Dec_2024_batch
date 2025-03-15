let fs =require("fs");
// let emp1 = {id:102,name:"John",age:26};  // literal type object
// let emp2 = {id:102,name:"John",age:26};  // literal type object
// let emp3 = {id:102,name:"John",age:26};  // literal type object
// let employees = [];
// employees.push(emp1);
// employees.push(emp2);
// employees.push(emp3);   
// let empString = JSON.stringify(employees);
// fs.writeFileSync("employee.json",empString);
console.log("Employee details stored in file successfully");
let empStringFormat = fs.readFileSync("employee.json","utf-8");// string format 
let employeesJson = JSON.parse(empStringFormat);
console.log("Number of employees "+employeesJson.length);
employeesJson.forEach(emp => {
    console.log("Id is "+emp.id);
    console.log("Name is "+emp.name);
    console.log("Age is "+emp.age);
});