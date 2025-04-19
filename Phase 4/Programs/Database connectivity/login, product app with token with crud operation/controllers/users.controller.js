let userService = require('../services/users.services');


let signUp = async (req, res) => {
    try {
        let user = req.body;
        let result = await userService.signUp(user);    
        res.json({"msg":result})
    }catch(error){
        res.json({"msg":error.message})
    }
}

module.exports={
    signUp
}