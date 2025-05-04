let express = require('express');
let dotenv = require('dotenv');
let cors = require('cors');
dotenv.config(); // Load environment variables from .env file
//dotenv.config({ path: "./config/config.env" });
let PORT = process.env.PORT || 9090;

let dbConnect = require("./config/db");
let app = express();
let userRoutes = require("./routes/users.routes");
// middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes
// main path for the API 

app.use("/api/login", userRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})