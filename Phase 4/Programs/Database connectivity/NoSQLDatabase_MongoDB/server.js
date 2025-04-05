let express = require("express");   // load the express module 
let mongoDb = require("mongodb");   // load the mongodb module
let app = express();                // create an express application    

// middleware to parse JSON data from the request body
app.use(express.json()); // parse JSON data from the request body

// database URL 
let url ="mongodb://localhost:27017"; // URL to connect to the database, 27017 is the default port for MongoDB
let dbName = "product_db"; // name of the database to connect to

// connect the mongodb database
let mongoClient = mongoDb.MongoClient; // create a mongoClient object, which provides methods to connect to the database
let db; // variable to hold the database object
// ready to connect to the database 
mongoClient.connect(url).
then(client=> {
    db = client.db(dbName);// connect to the database using the client object
    console.log("Database connected successfully");
}).
catch(error=>
    {
        console.log(error);
}); 
// connect to the database and catch any errors

// store the production information in product_db collection 
// http://localhost:3000/storeProduct
// data format :{_id:1,name:"TV","price":1000,"quantity":10}

app.post("/storeProduct",async (req,res)=> {
    try{
    let newProduct = req.body; // get the product information from the request body
    console.log(newProduct); // log the product information to the console
    //res.send("done")
    let result = await db.collection("product").insertOne(newProduct);  // db.product.insertOne(newProduct) // insert the product information into the product collection
    res.json({"msg":result});
    }catch(error){
        res.json({"msg":error});
    }    
});

// find the all product information from the database
// http://localhost:3000/findProduct

app.get("/findProduct",async (req, res)=> {
    try{
    let result = await db.collection("product").find().toArray(); // find all documents in the product collection
    // let result = await db.collection("product").find().forEach((doc)=>{
    //     console.log(doc);       // display result on console server side 
    // })
    res.json(result);
    }catch(error){
        res.json({"msg":error});
    }
})

// search the product information base upon product id 
// http://localhost:3000/findProduct/1
// http://localhost:3000/findProduct/100

app.get("/findProduct/:id",async(req,res)=> {
    try{
        let pid = req.params.id;    // string consider as a string
        let result = await db.collection("product").findOne({_id:Number(pid)});
       // let result = await db.collection("product").find({_id:Number(pid)}).toArray() 
       // res.json(result);
       if(result==null){
            res.json({"msg":"product not found"}); // if product not found, send a message to the client    

       }else {
            res.json(result); // if product found, send the product information to the client
       }
    }catch(error){
        res.json({"msg":error});
    }
});

// delete the product information from the database using product id ie _id 
// http://localhost:3000/deleteProduct/1
// http://localhost:3000/deleteProduct/100

app.delete("/deleteProduct/:id",async (req,res)=> {
try{
    let pid = req.params.id; // get the product id from the request parameters
    let result = await db.collection("product").deleteOne({_id:Number(pid)});
    //res.json({"msg":result}); // send the result of the delete operation to the client  
    if(result.deletedCount==1){
        res.json({"msg":"product deleted successfully"});
    }else{
        res.json({"msg":"product not found"});
    }
}catch(error){
    res.json({"msg":error});    
}
})
// update the product information using product id ie _id
// http://localhost:3000/updateProduct/1

app.put("/updateProduct/:id",async (req,res)=> {
    try{
     let pid = req.params.id;
     let toUpdateNewProduct = req.body;
     let result = await db.collection("product").
     updateOne({_id:Number(pid)},{$set:toUpdateNewProduct});  
     //res.json({msg:result}); // send the result of the update operation to the client
    if(result.modifiedCount==1){
        res.json({"msg":"product updated successfully"});
    }else if(result.matchedCount==1){
        res.json({"msg":"product present, but didn't update because old and new data are same"});
    }else {
        res.json({"msg":"product not found"}); // if product not found, send a message to the client    

    }
    }catch(error){
        res.json({"msg":error});
    }
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});