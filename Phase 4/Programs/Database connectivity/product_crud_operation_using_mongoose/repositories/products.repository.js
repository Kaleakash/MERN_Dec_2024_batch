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


module.exports = {
    storeProduct
}