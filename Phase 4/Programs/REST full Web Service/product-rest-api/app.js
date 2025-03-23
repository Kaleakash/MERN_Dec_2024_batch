let express = require("express");
let app = express();

// creating product array variable which hold the product details
let products =[
    {pid:1, name:"Laptop", price: 1000},
    {pid:2, name:"Mobile", price: 500},
    {pid:3, name:"Tablet", price: 300}
]

// get all product in json format 
// http://localhost:3000/findProducts

app.get("/findProducts",(request,response)=> {
    response.json(products);
})



app.listen(3000,()=> {
    console.log("Server running on port number 3000");
})