// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
// topic: string


let a = "axc";
let b = "ahbgdc";

const fn = (a,b)=>{
    // check which one is small firstly
    let small;
    let large;
  if(a.length < b.length){
    small = a.split("");
    large = b;
  }else{
    small = b.split("")
    large = a
  }
    let slices = large;
    let arr = [];
 for(let i = 0; i <small.length; i++){
    if(slices.indexOf(small[i]) != -1){
        arr.push(small[i])
        slices = slices.slice(slices.indexOf(small[i]))
    }   
 }
   if(arr.join("") == small.join("")){
    return true;
   }else{
    return false;
   }
}

console.log(fn(a,b))
