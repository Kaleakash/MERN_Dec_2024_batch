let fs = require('fs');
let data ="Welcome to Node JS with Synchronous file write";
fs.writeFileSync('demo2.txt',data);//writeSync is used to write data in file synchronously
console.log("File write successfully");
console.log("1st message");
console.log("2nd message");
