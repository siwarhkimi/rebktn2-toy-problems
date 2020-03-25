/*
* Given a sorted array, find the index of an element
* using a binary search algorithm.
*
* Example usage:
*
* var index = binarySearch([1, 2, 3, 4, 5], 4);
* console.log(index); // 3
* var index = binarySearch([1, 2, 3, 4, 5], 8);
* console.log(index); // null
*/


var binarySearch = function (array, target) {
    var start = 0;
    var end = array.length;
    var middle = Math.floor((array[start]+array[end]) / 2);   
    
    while(start < end) {
        if(array[middle]===target) {
            return middle;
        }
        else if(array[middle] < target) {
            end = middle - 1;
            middle =  Math.floor((array[start]+array[end]) / 2);
        } else if(array[middle] > target) {
            start = middle + 1;
            middle =  Math.floor((array[start]+array[end]) / 2);
        }
    }
    return null;
    
};

