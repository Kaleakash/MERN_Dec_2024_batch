let express = require("express");
let router = express.Router();  // Create a new router object
let productController = require("../controllers/products.controller");
// it provide http method details like get, post, put, delete etc.
// it provide sub path and controller method to call.

router.post("/store",productController.storeProduct); // Route to store product
router.get("/findAll",productController.findAllProducts); // Route to find all products
router.get("/search/:pid",productController.searchProductById); // Route to search product by id

module.exports={
    router
}