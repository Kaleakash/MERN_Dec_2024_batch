let productModel = require('../models/products.models');        // ES5 style import of productModel
let mongoose = require('mongoose');
// this file contains more than one function with pure database logic. 
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

let findProductById = async (pid)=> {
    try{
    let p_id = new mongoose.Types.ObjectId(pid); // convert string to ObjectId
    let product = await productModel.findById(p_id); // findById() pre defined method in mongoose to find a document by id
    return product;
    }catch(error){
        console.log("Error in search products", error);
        return "Error in search products "+error.message;
    }
}
module.exports = {
    storeProduct,findAllProducts,findProductById 
}

