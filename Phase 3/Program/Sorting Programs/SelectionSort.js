function SelectionSortAsc(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;   // assume the minimum is the first element
        for (let j = i + 1; j < n; j++) {   // test against elements after i to find the smallest
            if (arr[j] < arr[minIndex]) {   // if this element is less, then it is the new minimum
                minIndex = j;               // found new minimum; remember its index
            }
        }
        
        let temp = arr[minIndex];   // swap the current element and the minimum element
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        
        return arr;   // return the sorted array
}
function SelectionSortDesc(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;   // assume the minimum is the first element
        for (let j = i + 1; j < n; j++) {   // test against elements after i to find the smallest
            if (arr[j] > arr[minIndex]) {   // if this element is less, then it is the new minimum
                minIndex = j;               // found new minimum; remember its index
            }
        }
        
        let temp = arr[minIndex];   // swap the current element and the minimum element
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        
        return arr;   // return the sorted array
}

let array = [4,2,6,8,3];
console.log("Original array: "+array)
console.log("Sorted array: "+SelectionSortAsc(array));
console.log("Sorted array: "+SelectionSortDesc(array));