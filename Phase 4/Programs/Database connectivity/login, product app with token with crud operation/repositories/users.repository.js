let usersModel = require("../models/users.models"); // ES5 style import of usersModel

let signIn = async (user)=> {

}


let signUp = async(user)=> {        // email, password, role (default role is customer)
    let existingUser = await usersModel.findOne({email:user.email});
    if(existingUser){
        throw new Error("Email already exists");
    }else {
        let newUser = new usersModel(user);
        let result = await newUser.save();
        return result;
    }
}

module.exports = {
    signUp
}

