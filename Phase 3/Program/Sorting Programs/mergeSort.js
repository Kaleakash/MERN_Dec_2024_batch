//let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
function MergeSort(arr){
    if(arr.length<=1){
        return arr;  // Base case: if the array has 0 or 1 element, it is already sorted
    }
    // divide the array into two halves
    let mid = Math.floor(arr.length/2);  // it ingore the decimal part and return the integer part
    let left = arr.slice(0,mid);  // slice the array from 0 to mid-1
    let right = arr.slice(mid);  // slice the array from mid to end of array
    // console.log("mid "+mid)
    // console.log("left "+left)
    // console.log("right"+right)

    // recursively sort the two halves
    let sortedLeft = MergeSort(left);  // sort the left half recursively
    let sortedRight = MergeSort(right);  // sort the right half recursively
    return merge(sortedLeft,sortedRight);  // merge the two sorted halves
}
function merge(left,right){
    let result = [];  // create an empty array to store the merged result
    let leftIndex =0;
    let rightIndex =0;
    // merge left and right into result array until one of them is empty
    while(leftIndex<left.length && rightIndex<right.length){
            if(left[leftIndex]<right[rightIndex]){  // if the current element in left is smaller than the current element in right, push the current element in left to result array and increment the leftIndex by 1
                result.push(left[leftIndex]);
                leftIndex++;
            }else {
                result.push(right[rightIndex]);  // if the current element in right is smaller than the current element in left, push the current element in right to result array and increment the rightIndex by 1
                rightIndex++;
            }
    }
    // if there are remaining elements in left, push them to result array
    while(leftIndex<left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }
    // if there are remaining elements in right, push them to result array
    while(rightIndex<right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;  // return the merged result array
}

let arr = [3,1,2,4,5,6];
console.log("Original array: "+arr);  // print the original array
console.log("Sorted array: "+MergeSort(arr));  // print the sorted array using mergeSort function