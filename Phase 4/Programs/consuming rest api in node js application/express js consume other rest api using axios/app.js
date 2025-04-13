let express = require("express");
let axios = require("axios");

let app = express();

// http://localhost:3000

app.get("/",(req,res)=> {
    res.send("Welcome to Simple Rest API using Express.js");
})
// http://localhost:3000/products

app.get("/products", async (req, res) => {
    let response = await axios.get("https://fakestoreapi.com/products");
    let products = response.data;
    res.json(products);
})
// http://localhost:3000/findProduct/100

app.get("/findProduct/:pid", async (req, res) => {
    let response = await axios.get("https://fakestoreapi.com/products");
    let products = response.data;

    let pid = req.params.pid;
    
    let product = products.find(p=>p.id ==pid);
    if(product==undefined){
        res.send("Product not found");
    }else {
        res.json({"msg":"PName "+product.title+" Price "+product.price});
    }
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
   });  