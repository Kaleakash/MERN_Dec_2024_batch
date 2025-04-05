let express = require("express");   // load the express module 
let mongoDb = require("mongodb");   // load the mongodb module
let app = express();                // create an express application    

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


app.listen(3000, () => {
    console.log("Server running at port 3000");
});