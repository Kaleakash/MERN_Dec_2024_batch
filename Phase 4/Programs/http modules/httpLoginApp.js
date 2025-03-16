let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((request,response)=> {
    let urlRef = url.parse(request.url,true);
    response.writeHead(200, {"content-type":"text/html"});
    if(urlRef.pathname == "/login") {
        let loginPage = fs.readFileSync("login.html"); //readFileSync is used to read the file synchronously
        response.write(loginPage);  
    }else if (urlRef.pathname == "/about_us") {
        let aboutPage = fs.readFileSync("about.html"); //readFileSync is used to read the file synchronously
        response.write(aboutPage);  
    }else if (urlRef.pathname == "/contact_us") {
        let contactPage = fs.readFileSync("contact.html"); //readFileSync is used to read the file synchronously
        response.write(contactPage);  
    }else if (urlRef.pathname == "/services") {
        let servicePage = fs.readFileSync("services.html"); //readFileSync is used to read the file synchronously
        response.write(servicePage);  
    }else if(urlRef.pathname == "/SignIn"){
        let data = urlRef.query;    // extract query information from url
       // console.log(data);
       if(data.email == "akash@gmail.com" && data.password=="1234"){
        response.write("<h1> Successfully login</h1>");
       }else {
        response.write("<h1> Failure try once again </h1>");
       }
        
    }else {
        let indexPage = fs.readFileSync("index.html"); //readFileSync is used to read the file synchronously
        response.write(indexPage);
    }
    response.end();
});

server.listen(9090, ()=>console.log("Server is running on port number 9090"));


