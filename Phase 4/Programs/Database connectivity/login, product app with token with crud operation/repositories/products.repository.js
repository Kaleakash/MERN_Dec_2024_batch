let productModel = require('../models/products.models');        // ES5 style import of productModel
let mongoose = require('mongoose');
// this file contains more than one function with pure database logic. 
let storeProduct = async (product) => {
    let newProduct = new productModel(product);
    let result = await newProduct.save();
    return result;
}

let findAllProducts = async ()=> {
    
        let products = await productModel.find();  // find() pre defined method in mongoose to find all documents in a collectio    
        return products;
 
}

let findProductById = async (pid)=> {
 
    let p_id = new mongoose.Types.ObjectId(pid); // convert string to ObjectId
    let product = await productModel.findById(p_id); // findById() pre defined method in mongoose to find a document by id
    return product;
 
}

let findAllProductsPriceRange = async (minPrice,maxPrice)=> {
    let products = await productModel.find({$and:[{price:{$gte:minPrice}},{price:{$lte:maxPrice}}]});  // find() pre defined method in mongoose to find all documents in a collection
    return products;
    
}

let deleteProductById = async(pid)=> {
        let p_id = new mongoose.Types.ObjectId(pid); // convert string to ObjectId
        let product = await productModel.findByIdAndDelete(p_id); // findByIdAndDelete() pre defined method in mongoose to delete a document by id
       // let product = await productModel.deleteOne({_id:p_id});
       //let product = await productModel.deleteMany({price:price})
        return product;
}

let updateProductPrice = async (pid,newPrice)=> {
    let p_id = new mongoose.Types.ObjectId(pid); // convert string to ObjectId
    let result = await productModel.updateOne({_id:p_id},{$set:{price:newPrice}}); // updateOne() pre defined method in mongoose to update a document by id
    //let result = await productModel.updateMany({name:nameValue},{$set:{price:newPrice}}); // updateOne() pre defined method in mongoose to update a document by id
    return result;
}

// export the module....
module.exports = {
    storeProduct,findAllProducts,findProductById,findAllProductsPriceRange,deleteProductById,updateProductPrice
}

