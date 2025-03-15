let fs = require('fs');
// readFile 
//1st parameter filename with path
// 2nd parameter callback function which take 2 parameters
// 1st parameter error
// 2nd parameter variable which hold data
fs.readFile("demo.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else {
        console.log(data)   // display buffer data
        console.log(data.toString()); // convert buffer data to string
        console.log("File read successfully");
    }
});
console.log("1st message");
console.log("2nd message");
console.log("3rd message");