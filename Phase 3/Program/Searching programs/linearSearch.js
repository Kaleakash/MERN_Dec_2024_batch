function linearSearch(arr,searchElement){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===searchElement){
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}

let array = [5,1,7,2,9,3,6,4];

let searchElement = 10;
let indexPosition = linearSearch(array,searchElement);
if(indexPosition !== -1){
    console.log(`Element ${searchElement} found at index ${indexPosition}`);
}else {
    console.log("Element not found");
}