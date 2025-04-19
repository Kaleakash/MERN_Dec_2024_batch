let jwttoken = require("jsonwebtoken");
let myKey = "myKey";    

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbGlkIjoiYWthc2hAZ21haWwuY29tIiwiaWF0IjoxNzQ1MDc4NjM2LCJleHAiOjE3NDUwNzg2OTZ9.riDMJi1Bs0ANF_m-7qDKHQj4Xs25FnIA7259YDN9u9w";

// verify the token 
// to call any end point 
try{
let verifyToken = jwttoken.verify(token, myKey);
console.log("Verify Token: ", verifyToken); 
if(verifyToken.role=="admin"){
    console.log("Admin Token");
}else if(verifyToken.role=="user"){
    console.log("User Token");
}else {
    console.log("Guest Token");
}
}catch(error){
    console.log(error);
}