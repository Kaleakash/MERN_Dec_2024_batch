import axios from "axios";
import { useEffect, useState } from "react";
function ProductView() {
let [products,setProducts]=useState([]);
useEffect(()=> {
    loadAllProducts();
},[]);

let loadAllProducts = function() {
    // it is use to display product on browser console 
   // axios.get("https://fakestoreapi.com/products").
   // then(response=>console.log(response.data)).catch(error=>console.log(error))
   
   // it is use to store all product in products state variable. 
    axios.get("https://fakestoreapi.com/products").
    then(response=>setProducts(response.data)).catch(error=>console.log(error))
}
    return(
        <div>
            <h3>View All Products</h3>
           
            <br/>
            <p>Number of products {products.length}</p>
            {
                products.map(product=>
                    <div key={product.id}>
                        <img src={product.image} width="200px" height="200px"/>
                        <span>PId {product.id} Title {product.title} Price : {product.price}</span>
                    </div>
                )
            }
        </div>
    )
}

export default ProductView;