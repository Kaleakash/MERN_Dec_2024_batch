let fs = require('fs');
let msg = fs.readFileSync('demo2.txt');
console.log(msg);// buffer format data 
console.log(msg.toString());    // convert buffer data to string
console.log("1st message");
console.log("2nd message");
console.log("3rd message");