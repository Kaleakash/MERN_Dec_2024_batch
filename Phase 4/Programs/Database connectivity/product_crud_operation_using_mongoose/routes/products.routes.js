let express = require("express");
let router = express.Router();  // Create a new router object
let productController = require("../controllers/products.controller");

router.post("/store",productController.storeProduct); // Route to store product

module.exports={
    router
}