// array question
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

let nums = [-4,-2,1,4,8];

function closestToZero(arr){
    if(arr.length === 0) return null;

    let close = arr[0];
  for(let i = 0; i < arr.length; i++){
      if(Math.abs(arr[i]) < Math.abs(close) || (Math.abs(arr[i] === Math.abs(close) && arr[i] > close)) ){
       close = arr[i];
      }
  }
  return close
}

console.log(closestToZero(nums))

