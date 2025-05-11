let express = require('express');
let dotenv = require('dotenv');
let userService = require('./services/users.services'); // Importing userService
let cors = require('cors');     // cross origin resource sharing
dotenv.config(); // Load environment variables from .env file
//dotenv.config({ path: "./config/config.env" });

let PORT = process.env.PORT || 9090;

let dbConnect = require("./config/db");
let app = express();
let userRoutes = require("./routes/users.routes");
// many other routes can be added here
// middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes
// main path for the API 

// http://localhost:3001/api/login/*
app.use("/api/login", userRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
    initialLoad(); // calling initialLoad function to create admin user
})

let initialLoad = async () => {
    let user = {"email": "admin@gmail.com","password": "admin123","role": "admin"};
    try{
    let result = await userService.signUp(user);
    console.log(result);
    }catch(error ){
        console.log("Admin " + error.message);
    }

}