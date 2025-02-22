let p1 = {"pid":102,"pname":"pencil","cost":10,"brand":"apsara"}
let p2 = {"pid":101,"pname":"pen","cost":120,"brand":"Abc"}
let p4 = {"pid":103,"pname":"computer","cost":98000,"brand":"Hp"}
let p3 = {"pid":105,"pname":"tv","cost":55000,"brand":"Sony"}

let products = [p1,p2,p3,p4];
console.log(products);      // string format 
console.log("Product details before sort")
for(let i=0;i<products.length;i++){
    console.log(products[i])        // get product details one by one
}
// sort products based on pid - ascending order

//products.sort((p1,p2)=>p1.pid-p2.pid);  // ascending order by pid
//products.sort((p1,p2)=>p2.pid-p1.pid);  // descending order by pid
//products.sort((p1,p2)=>p1.pname.localeCompare(p2.pname));  // ascending order by pname
products.sort((p1,p2)=>p2.pname.localeCompare(p1.pname));  // descending order by pname
console.log("Product details after sort")
for(let i=0;i<products.length;i++){
    console.log(products[i])        // get product details one by one
}
