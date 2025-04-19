let express = require('express');
let dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
let PORT = process.env.PORT || 9090;

let dbConnect = require("./config/db");
let app = express();
let productRoutes = require("./routes/products.routes");
let userRoutes = require("./routes/users.routes");
// middleware
app.use(express.json()); // Parse JSON request body
// main path for the API 
// http://localhost:9090/api/products/*
app.use("/api/products", productRoutes.router); // Use the product routes for the API
app.use("/api/login", userRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})