let userRepository = require('../repositories/users.repository');
let bycrypt = require("bcryptjs"); // for hashing password
let jwttoken = require("jsonwebtoken");
let dotenv = require("dotenv");
dotenv.config(); // load environment variables from .env file
let signIn = async (user) => {
    let existingUser = await userRepository.signIn(user);
    if(existingUser){
                        // user.password is text password , existingUser.password is hashed password
        let isPasswordMatched = await bycrypt.compare(user.password, existingUser.password);
        if(isPasswordMatched){
            let payload = {email:existingUser.email, role:existingUser.role};
            let token = jwttoken.sign(payload,process.env.MY_TOKEN , {expiresIn:"1m"});
            return token;
        }else {
            throw new Error("Password is incorrect");
        }
    }else {
        throw new Error("Email does not exist");
    }
}
let signUp = async(user) => {
    let salt = await bycrypt.genSalt(10); // 10 rounds of salting
    user.password = await bycrypt.hash(user.password, salt); // hashing password with 10 rounds of salting
    let result = await userRepository.signUp(user);
    return result;
}


module.exports={
    signUp,signIn
}