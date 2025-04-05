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



app.listen(3000, () => {
    console.log("Server running at port 3000");
});