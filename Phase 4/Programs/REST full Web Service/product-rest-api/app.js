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

// search product details using query param with help of pid 
// http://localhost:3000/findProductByIdUsingQueryParam?pid=1
app.get("/findProductByIdUsingQueryParam",(request,response)=>{
    let pid = request.query.pid;   // receive query param value 
    let result = products.find((p)=>p.pid == pid);  // if present it get that product details else it return undefined
    if(result==undefined){
        response.json({"msg":"Product not found"});
    }else {
        response.json(result);
    }
})
// search product details using path param with help of pid 
// http://localhost:3000/findProductByIdUsingPathParam/1    
app.get("/findProductByIdUsingPathParam/:pid",(request,response)=>{
    let pid = request.params.pid;   // receive path param value
    let result = products.find((p)=>p.pid == pid);  // if present it get that product details else it return undefined
    if(result==undefined){
        response.json({"msg":"Product not found"});
    }else {
        response.json(result);
    }
})

app.listen(3000,()=> {
    console.log("Server running on port number 3000");
})














