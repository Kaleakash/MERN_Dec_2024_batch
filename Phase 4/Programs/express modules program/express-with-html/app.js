let express = require('express');
let app = express();

// http://localhost:3000/

app.get("/", (request, response) => {
//res.send("Hello World");              // send response to the client as text 
//response.sendFile("index.html");      // send the file to client. But we need to provide complete path of the file
//response.sendFile("D:\\Desktop\\MERN Stack - Dec 2024 Batch\\Phase 4\\Programs\\express modules program\\express-with-html\\index.html");
//response.send(__dirname );  // __dirname is global object which provide current directory path
response.sendFile(__dirname + "/index.html");
});








app.listen(3000, () => {
console.log('Server is running on port 3000');
});