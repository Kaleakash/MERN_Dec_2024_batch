let ss = new Set();
console.log(ss.size)
console.log(ss)
ss.add(10);
ss.add(30);
ss.add(9);
ss.add(6);
ss.add(2);
ss.add(10); // Duplicate value, will not be added again
console.log(ss)
console.log(ss.has(10)) // true
console.log(ss.has(100))//false 
console.log(ss.size)
console.log(ss.delete(10)) // true
console.log(ss.delete(100))// false
console.log(ss)
ss.forEach((v)=>console.log(v))
ss.clear(); // remove all elements 
console.log(ss.size)
