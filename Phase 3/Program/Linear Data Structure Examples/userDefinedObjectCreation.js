// creating object using literal style 
let emp1 = {id:100,fname:"Steven",age:21};
console.log("object creation in literal style")
console.log("Id is "+emp1.id)
console.log("name is "+emp1.fname)
console.log("age is "+emp1.age)

// creating the object using function style till ES5 we were/are creating 
// object using function style
function Employee(){
    
    this.id = 100;      // this is a keyword which is used to refer current object
    this.fname = "Steven";
    this.age = 21;          // it is consider as instance variable. 
    
    this.displayEmployee = function(){
        console.log("Employee object in function style")
        console.log("id is "+this.id)
        console.log("name is "+this.fname)
        console.log("age is "+this.age)
    }

}
//Employee();     // it consider as normal function call 
let emp2 = new Employee();      // it consider as object as function style 
emp2.displayEmployee();