let express = require("express");
let router = express.Router();  // Create a new router object
let userController = require("../controllers/users.controller");


router.post("/signUp",userController.signUp); // Route to sign up user
router.post("/signIn",userController.signIn); // Route to sign up user

module.exports={
    router
}