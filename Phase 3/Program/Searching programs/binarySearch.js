function binarySearch(array,searchElement){
    let left = 0;
    let right = array.length - 1;
    while(left<=right){
        
        let mid = Math.floor((left+right)/2);
        
        if(array[mid]===searchElement){
            return mid;
        }
        else if(array[mid]<searchElement){
          left = mid + 1; 
         
        }else {
          right = mid - 1;
         
        }
    }
    return -1;
}
let array = [10,1,5,3,4,7,6,8,9,2];
console.log("array element "+array)
array.sort((a,b)=>a-b);
console.log("Sort element "+array)
let searchElement = 10;
let indexElement = binarySearch(array,searchElement);
if(indexElement!==-1){
    console.log(`Element ${searchElement} found at index ${indexElement}`);
}else {
    console.log(`Element ${searchElement} not found in array`);
}