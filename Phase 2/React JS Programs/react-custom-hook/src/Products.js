import useGet from "./useGet";

function Products() {
let {data,error,loading} = useGet("https://fakestoreapi.com/products");
//console.log(products)
if(loading){
    return <h2>Loading...</h2>
}
if(error) return <h2>Error</h2>

    return(
        <div>
            <h2>List Of Products</h2>
            {data.map((product) => 
                <div key={product.id}>{product.title}</div>
            )}
           <h2>Hello</h2>
        </div>
    )
}

export default Products;