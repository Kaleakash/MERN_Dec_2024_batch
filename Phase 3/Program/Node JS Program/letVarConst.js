var a=10;
a=20;       // assignment operator
var a=30;   // re-declaration is allowed in var
console.log(a); 
let b=10;
b=20;
//let b=30;   // re-declaration is not allowed in let
console.log(b); 
for(var i=0;i<1000;i++){

}
console.log("value of i is "+i);
for(let j=0;j<1000;j++){

}
//console.log("value of j is "+j); // j is not defined
const c=1000;
//c=2000; // TypeError: Assignment to constant variable.