let userRepository = require('../repositories/users.repository');
let bycrypt = require("bcryptjs"); // for hashing password

let signUp = async(user) => {
    let salt = await bycrypt.genSalt(10); // 10 rounds of salting
    user.password = await bycrypt.hash(user.password, salt); // hashing password with 10 rounds of salting
    let result = await userRepository.signUp(user);
    return result;
}


module.exports={
    signUp
}