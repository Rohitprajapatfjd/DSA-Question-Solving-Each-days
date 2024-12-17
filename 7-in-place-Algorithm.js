// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// WikipediaWikipedia
// In-place algorithm
// In computer science, an in-place algorithm is an algorithm that operates directly on the input data structure without requiring extra space proportional to the input size. In other words, it modifies the input in place, without creating a separate copy of the data structure. An algorithm which is not in-place is sometimes called not-in-place or out-of-place.
// In-place can have slightly different meanings. In its strictest form, the algorithm can only have a constant amount of extra space, counting everything including function calls and pointers. However, this form is very limited as simply having an index to a length n array requires O(log n) bits. More broadly, in-place means that the algorithm does not use extra space for manipulating the input but may require a small though nonconstant extra space for its operation. Usually, this space is O(log n), though sometimes anything in o(n) is allowed. Note that space complexity also has varied choices in whether or not to count the index lengths as part of the space used. Often, the space complexity is given in terms of the number of indices or pointers needed, ignoring their length. In this article, we refer to total space complexity (DSPACE), counting pointer lengths. Therefore, the space requirements here have an extra log n factor compared to an analysis that ignores the lengths of indices and pointers.  
// An algorithm may or may not count the output as part of its space usage. Since in-place algorithms usually overwrite their input with output, no additional space is needed. When writing the output to write-only memory or a stream, it may be more appropriate to only consider the working space of the algorithm. In theoretical applications such as log-space reductions, it is more typical to always ignore output space (in these cases it is more essential that the output is write-only).


// function __(x,y){
//     return x;
// }

// function reverse(arr, n){
//     for(let i = 0; i < n/2; i++){
//         arr[i] = __(arr[n - i - 1], arr[n - i - 1] = arr[i])
//     }
// }
// let arr = [1,2,3,4,5,6];
// let n = arr.length;

// console.log(arr);
// reverse(arr,n);
// console.log(arr)

function __(x,y){
    return x;
}
let arr = [0,0,1,1,1,1,2,3,3]
function removeDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i+1] == arr[i+2]){
           arr.splice(i+2,1)
           removeDuplicate(arr)
        }
       
    }
}
console.log(arr);
removeDuplicate(arr);
console.log(arr)
