let express = require('express');
let dbConnect = require("./config/db");
let app = express();
let productRoutes = require("./routes/products.routes");

// middleware
app.use(express.json()); // Parse JSON request body



// main path for the API 
// http://localhost:9090/api/products/*
app.use("/api/products", productRoutes.router); // Use the product routes for the API



app.listen(9090, () => {
    console.log("Server is running on port 9090");
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})