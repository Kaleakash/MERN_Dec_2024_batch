let http = require("http");
console.log("module loaded...")
// createServer take callback function
// which takes 2 parameter 1st is request and 2nd is response
// whenever any client application send the request 
// with url as http://localhost:3000 then this callback function will be called

let server = http.createServer((request,response)=> {
    response.end("Hello Client, Welcome to NodeJS Server");
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});