// 1st example 
// let num1 = [1,7,5,2,9,4,6,3];
// console.log("Numbers before sort")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")
//     num1.sort(); // Sorting the array in ascending order
// console.log("Numbers after sort Ascending order")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")
//     num1.reverse(); // Sorting the array in descending order
// console.log("Numbers after sort Descending order")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")

// 2nd example 
// let num1 = [1,17,50,20,19,4,6,32];
// console.log("Numbers before sort")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")
//     num1.sort((a,b)=>a-b); // Sorting the array in ascending order
// console.log("Numbers after sort Ascending order")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")
//     num1.sort((a,b)=>b-a) // Sorting the array in descending order
// console.log("Numbers after sort Descending order")
// console.log("-------------")
// num1.forEach(n=>console.log(n));
// console.log("-------------")

// 3rd example 
let names = ["Alice","Steven","Bob","John","Eve","Dinesh","Charlie","David"];
console.log("names before sort")
console.log("-------------")
names.forEach(name=>console.log(name));
console.log("-------------")
    names.sort((name1,name2)=>name1.localeCompare(name2)); // Sorting the array in ascending order
console.log("Numbers after sort Ascending order")
console.log("-------------")
names.forEach(name=>console.log(name));
console.log("-------------")
names.sort((name1,name2)=>name2.localeCompare(name1)); // Sorting the array in ascending o
console.log("names after sort Descending order")
console.log("-------------")
names.forEach(name=>console.log(name));
console.log("-------------")
