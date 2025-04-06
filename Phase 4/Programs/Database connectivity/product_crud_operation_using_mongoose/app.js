let express = require('express');
let dbConnect = require("./config/db");
let app = express();









app.listen(9090, () => {
    console.log("Server is running on port 9090");
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})