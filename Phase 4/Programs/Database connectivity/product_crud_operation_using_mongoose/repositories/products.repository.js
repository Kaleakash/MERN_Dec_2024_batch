let productModel = require('../models/products.models');

let storeProduct = async (product) => {
    try{
    let newProduct = new productModel(product);
    let result = await newProduct.save();
    return result;
    }catch(error){
        console.log("Error in storing product", error);
        return "Error in storing product "+error.message;
    }
}

let findAllProducts = async ()=> {
    try{
        let products = await productModel.find();  // find() pre defined method in mongoose to find all documents in a collection
        
        return products;
    }catch(error){
        console.log("Error in fetching products", error);
        return "Error in fetching products "+error.message;
    }
}

module.exports = {
    storeProduct,findAllProducts 
}