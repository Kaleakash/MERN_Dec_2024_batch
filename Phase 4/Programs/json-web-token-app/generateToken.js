let jwttoken = require("jsonwebtoken");
let myKey = "myKey";    

let payloadData = {
    "emailid": "akash@gmail.com",   // value can be dynamic 
    "role": "admin",
}

let token = jwttoken.sign(payloadData, myKey, { expiresIn: '1m'})   

console.log("Token: ", token);// when   we sign the token we pass the payload





