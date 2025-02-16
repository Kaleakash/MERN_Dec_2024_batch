let mm = new Map(); // created map object 
console.log(mm);       // display reference of map object
mm.set("name","John");  // set key value pair
mm.set("age",30);       // set key value pair
mm.set("city","New York"); // set key value pair
mm.set("isEmployee",true);  // set key value pair
mm.set("salary",50000);  // set key value pair
mm.set("name","Lex");  // set key value pair (overwrite "name" key value pair)
console.log(mm);        // display map object with key value pairs
console.log(mm.has("name")); // check if key "name" exists in map object (true)
console.log(mm.has("address")); // check if key "address" exists in map object (false)
mm.delete("salary");  // delete key value pair with key "salary"
console.log(mm);       // display map object after deletion
console.log(mm.size)
console.log(mm.get("name")); // get value of key "name" (Lex)
console.log(mm.get("age")); // get value of key "age" (30)
console.log(mm.get("address"))//get undefined value of key "address" (undefined)
mm.forEach((value,key) => { // iterate over map object using forEach method
    console.log(key + " : " + value); // display key value pair
}); // end of forEach method
mm.clear(); // clear all key value pairs from map object
console.log(mm.size)