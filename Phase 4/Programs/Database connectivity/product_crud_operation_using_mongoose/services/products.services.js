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

let findAllProducts = async ()=> {
    try{
        // business logic for fetching all products
        // returning all products from the repository
        // let products = await productRepository.findAllProducts();
        // console.log("Products in service", products.length);
        // return products;
        
        // return products with 10% discount
        let products = await productRepository.findAllProducts();
        let discountProducts = products.map(product=> {
            product.price = product.price - (product.price * 0.10);
            return product;
        })
        return discountProducts;

    }catch(error){
        console.log("Error in fetching products", error);
        return "Error in fetching products "+error.message;
    }
}

module.exports = {
    storeProduct,findAllProducts
}