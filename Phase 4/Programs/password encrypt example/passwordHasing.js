let bcryptjs = require("bcryptjs");
let myPassword = "abc@123";

function encryptPassword(password) {
let salt = bcryptjs.genSaltSync();    // less round means password less secure but faster to hash
console.log(salt); // 10 rounds is default
let hash = bcryptjs.hashSync(password, salt);
return hash;
}

let myHashPassword = encryptPassword(myPassword);
console.log(myHashPassword);
let newPassword = "abc@123"; // wrong password to test
console.log("--------------------");
let isMatch = bcryptjs.compareSync(newPassword, myHashPassword);
if (isMatch) {
    console.log("Password matched");
}else {
    console.log("Password not matched");
}