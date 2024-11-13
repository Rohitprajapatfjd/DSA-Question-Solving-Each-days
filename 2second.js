// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

let word1 = "abcd";
let word2 = "pq";

const merge = (str1, str2)=>{
  let first = str1.split("");
  let second = str2.split("");
   let array = [];
 if(first.length == 0) {
    return str2;
 }else if(second.length == 0){
    return str1
 }
 // check which one is large
 let total = "";
 if(first.length > second.length){
    total = first.length;
 }else{
    total = second.length;
 }
 for(let i = 0; i <total; i++){
    array.push(first[i])
    array.push(second[i])
 }
 return array.join("");
}

console.log(merge(word1,word2))