function bubbleSortAsc(arr){
    let n = arr.length;     // which provide the size of the array and store it in n
    let swapped;            // which is used to check if any swapping has been done in the inner loop
    do{
        swapped = false;    // which is set to false at the beginning of each outer loop iteration
        for(let i = 0; i < n-1; i++){    // which iterates through the array from the first element to the second last element
            
            if(arr[i] > arr[i+1]){    // which checks if the current element is greater than the next element
                let temp = arr[i];    // which stores the current element in a temporary variable
                arr[i] = arr[i+1];    // which swaps the current element with the next element  
                arr[i+1] = temp;    // which swaps the next element with the current element (stored in the temporary variable)
                swapped = true;    // which sets swapped to true, indicating that a swap has been done
            }

        }
        n--;    // which decreases the size of the array to be sorted by one, as the largest element is already in its correct position
    }while(swapped);       // which continues the loop as long as swapping is done in the inner loop
}
function bubbleSortDesc(arr){
    let n = arr.length;     // which provide the size of the array and store it in n
    let swapped;            // which is used to check if any swapping has been done in the inner loop
    do{
        swapped = false;    // which is set to false at the beginning of each outer loop iteration
        for(let i = 0; i < n-1; i++){    // which iterates through the array from the first element to the second last element
            
            if(arr[i] < arr[i+1]){    // which checks if the current element is greater than the next element
                let temp = arr[i];    // which stores the current element in a temporary variable
                arr[i] = arr[i+1];    // which swaps the current element with the next element  
                arr[i+1] = temp;    // which swaps the next element with the current element (stored in the temporary variable)
                swapped = true;    // which sets swapped to true, indicating that a swap has been done
            }
        }
        n--;    // which decreases the size of the array to be sorted by one, as the largest element is already in its correct position
    }while(swapped);       // which continues the loop as long as swapping is done in the inner loop
}
let arr = [5, 3, 8, 4, 2];    // which is the array to be sorted using bubble sort algorithm
console.log("Original array: "+arr);    // which prints the original array to the console
bubbleSortAsc(arr);    // which calls the bubbleSort function and passes the array as an argument
console.log("Sorted array in ascending order: "+arr);    // which prints the sorted array to the console
bubbleSortDesc(arr);    // which calls the bubbleSort function and passes the array as an argument in descending order
console.log("Sorted array in descending order: "+arr);    // which prints the sorted array in descending order to the console