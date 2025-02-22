function InsertionSortAsc(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let key = arr[i];       
        let j = i - 1;

        while(j >= 0 && arr[j] > key){  
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;       // insert the elements in the correct position
    }
    return arr;
}
function InsertionSortDesc(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let key = arr[i];       
        let j = i - 1;

        while(j >= 0 && arr[j] < key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;       // insert the elements in the correct position
    }
    return arr;
}

let array = [4,1,5,2,6];
console.log("Original Array: "+array);
console.log("Ascending Order: "+InsertionSortAsc(array));
console.log("Descending Order: "+InsertionSortDesc(array));