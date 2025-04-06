let obj1 = require("./file1");   // importing the entire module user defined module
let obj2 = require("./file2");
let hsbc = require("./hsbc"); // importing the entire module user defined module
let sbi = require("./sbi"); // importing the entire module user defined module
obj1.hello();
obj2.hi();
obj1.display();
obj2.display();
hsbc.checkBalance();
sbi.checkBalance();