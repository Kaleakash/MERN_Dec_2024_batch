let productService = require("../services/products.services");

let storeProduct = async (req, res) => {
    try{
        let product = req.body;   // Get product data from request body
        let result = await productService.storeProduct(product); // Call service to store product
        res.json({"msg":result})
    }catch(error){
        console.log("Error in storing product", error);
        res.json({"msg":error.message});
    }
}

let findAllProducts = async (req, res) => {
    try{
        let products = await productService.findAllProducts();
        res.json(products);
    }catch(error){
        console.log("Error in fetching products", error);
        res.json({"msg":error.message});
    }
}

module.exports = {
    storeProduct,findAllProducts
}