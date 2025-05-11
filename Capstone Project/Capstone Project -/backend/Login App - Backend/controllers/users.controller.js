let userService = require('../services/users.services');


let signUp = async (req, res) => {
    try {
        let user = req.body;        // email, password and role 
        //console.log(user);
        let result = await userService.signUp(user);   
        if(result == null){
            return res.status(400).json({"msg":"User already exists"})
        }else {
            res.json({"msg":"Account Created Successfully"})
        } 
      
    }catch(error){
        res.json({"msg":error.message})
    }
}

let signIn = async (req, res) => {
    try {
        let user = req.body;
        //console.log(user);
        let result = await userService.signIn(user);
        res.json({"msg":result})
    }catch(error){
        res.json({"msg":error.message})
    }
}

module.exports={
    signUp,signIn
}