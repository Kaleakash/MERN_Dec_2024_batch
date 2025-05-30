let express = require("express");
let router = express.Router();  // Create a new router object
let productController = require("../controllers/products.controller");
// it provide http method details like get, post, put, delete etc.
// it provide sub path and controller method to call.
let myMiddleware = require("../middleware/auth.middleware");

// admin can add product, view product, update product and delete product
// customer can view all product 
// any user without token they can search the product. 

router.post("/store",myMiddleware.authMiddleware, myMiddleware.adminOnly, productController.storeProduct); // Route to store product
    router.get("/findAll",myMiddleware.authMiddleware,productController.findAllProducts); // Route to find all products
        router.get("/search/:pid",productController.searchProductById); // Route to search product by id
        router.get("/searchByPrice/:minPrice/:maxPrice",productController.findProductByPriceRange);
router.delete("/delete/:pid",myMiddleware.authMiddleware,myMiddleware.adminOnly,productController.deleteProductById); // Route to delete product by id
router.put("/update/:pid",myMiddleware.authMiddleware,myMiddleware.adminOnly,productController.updateProductPrice); // Route to update product price by id

module.exports={
    router
}