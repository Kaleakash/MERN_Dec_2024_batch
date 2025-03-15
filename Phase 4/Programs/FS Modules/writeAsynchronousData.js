let fs = require('fs');
console.log("module loaded successfully");
let data = "Welcome once again to Node.js";
// write file
// fs.writeFile() which take 3 parameters
// 1st parameter filename with path
// 2nd parameter data to be written or message or values to be written
// 3rd parameter callback function which take 2 parameters
fs.writeFile('demo.txt',data,(err)=>{   // override the data. 
    if(err){
        console.log(err);
    }
    else{
        console.log("Data stored in file");
    }
}); 
console.log("1st message");
console.log("2nd message");
console.log("3rd message");
