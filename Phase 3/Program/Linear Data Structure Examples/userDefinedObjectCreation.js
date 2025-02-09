// creating object using literal style 
let emp1 = {id:101,fname:"Lex",age:25};
console.log("object creation in literal style")
console.log("Id is "+emp1.id)
console.log("name is "+emp1.fname)
console.log("age is "+emp1.age)

// creating the object using function style till ES5 we were/are creating 
// object using function style
// function Employee(){
    
//     this.id = 100;      // this is a keyword which is used to refer current object
//     this.fname = "Steven";
//     this.age = 21;          // it is consider as instance variable. 
    
//     this.displayEmployee = function(){
//         console.log("Employee object in function style")
//         console.log("id is "+this.id)
//         console.log("name is "+this.fname)
//         console.log("age is "+this.age)
//     }

// }
// //Employee();     // it consider as normal function call 
// let emp2 = new Employee();      // it consider as object as function style 
// emp2.displayEmployee();
// let emp3 = new Employee();      // it consider as object as function style 
// emp3.displayEmployee();


// creating object in function style with parameter 
// function Employee(id,fname,age){
    
//     this.id = id;      // this is a keyword which is used to refer current object
//     this.fname = fname;
//     this.age = age;          // it is consider as instance variable. 
    
//     this.displayEmployee = function(){
//         console.log("Employee object in function style")
//         console.log("id is "+this.id)
//         console.log("name is "+this.fname)
//         console.log("age is "+this.age)
//     }

// }
// //Employee();     // it consider as normal function call 
// let emp2 = new Employee(102,"Raj",34);      // it consider as object as function style 
// emp2.displayEmployee();
// let emp3 = new Employee(103,"Rajesh",36);      // it consider as object as function style 
// emp3.displayEmployee();

// creating object in class style with ES6 features (ES6 - ECMAScript 2015)
// class Employee {
//     id=100;
//     fname="Ravi";
//     age=34

//     displayEmployee() {
//         console.log("Employee object in class style")
//         console.log("id is "+this.id)
//         console.log("fname is "+this.fname)
//         console.log("age is "+this.age)
//     }
// }

// let emp2  = new Employee();
// emp2.displayEmployee();
// let emp3 = new Employee();
// emp3.displayEmployee();
// constructor is a type of special function which help to create the memory. 
// creating the object using constructor with ES6 features (ES6 - ECMAScript 2015)
class Employee {
    constructor(id,fname,age){
        this.id=id;
        this.fname=fname;
        this.age=age
    }
    displayEmployee() {
        console.log("Employee object in class style")
        console.log("id is "+this.id)
        console.log("fname is "+this.fname)
        console.log("age is "+this.age)
    }
}

let emp2  = new Employee(103,"Raj",34);
emp2.displayEmployee();
let emp3 = new Employee(104,"Rajesh",36);
emp3.displayEmployee();

// any user defined object 
// 1. properties 2. methods
// hair, eyes, height, weight, walk(), talk(), eat(), sleep(), run()
class Person {
    constructor(hair,eyes,height,weight){
        this.hair=hair;
        this.eyes=eyes;
        this.height=height;
        this.weight=weight
    }
    walk(){
        console.log("walking")
    }
    talk(){
        console.log("talking")
    }
    eat(){
        console.log("eating")
    }
    sleep(){
        console.log("sleeping")
    }
    run(){
        console.log("running")
    }
}
let p1 = new Person("black","black",5.6,60);
p1.walk();
p1.talk();
p1.eat();
p1.sleep();
p1.run();
