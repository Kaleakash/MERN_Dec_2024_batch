let userRepository = require('../repositories/users.repository');

let dotenv = require("dotenv");
dotenv.config(); // load environment variables from .env file
let signIn = async (user) => {
    let existingUser = await userRepository.signIn(user);
    if(existingUser){
        if(existingUser.password === user.password){
                if(existingUser.role=="admin" && user.role=="admin"){
                    return "Admin login successful";
                }else if(existingUser.role=="customer" && user.role=="customer"){
                    return "Customer login successful";
                }else {
                    return "User role does not match";
                }
        }else {
            throw new Error("Password is incorrect");
        }
    }else {
        throw new Error("Email does not exist");
    }
}
let signUp = async(user) => {
    let result = await userRepository.signUp(user);
    return result;
}


module.exports={
    signUp,signIn
}