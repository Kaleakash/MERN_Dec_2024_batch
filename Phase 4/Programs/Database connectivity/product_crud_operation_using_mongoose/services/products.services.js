let productRepository = require("../repositories/products.repository");

let storeProduct = async (product) => {
    // business logic for storing product
    try{
        if(product.price < 0){
            return "Price cannot be negative";
        }else {
            let result = await productRepository.storeProduct(product);
            return result;
        }
    }catch(error){
        console.log("Error in storing product", error);
        return "Error in storing product "+error.message;
    }
}

module.exports = {
    storeProduct
}