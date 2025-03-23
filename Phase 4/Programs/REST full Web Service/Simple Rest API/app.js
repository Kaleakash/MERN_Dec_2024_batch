let express = require('express');
let app = express();

let message = "<abc>Welcome to Rest API</abc>";
let emp = {name:"John",age:30,city:"New York"};     // object literal not mandatory key must be in double quotes.
// http://localhost:3000/text
app.get("/text",(request,response)=> {
    response.setHeader("Content-Type","text/plain");
    response.send(message);
})

// http://localhost:3000/html
app.get("/html",(request,response)=> {
    response.setHeader("Content-Type","text/html");
    response.send(message);
})

// http://localhost:3000/xml
app.get("/xml",(request,response)=> {
    response.setHeader("Content-Type","application/xml");
    response.send(message);
})

// http://localhost:3000/json
app.get("/json",(request,response)=> {
    //response.setHeader("Content-Type","application/json");
    response.json(emp); // object literal convert into json format with help of json method. 
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})