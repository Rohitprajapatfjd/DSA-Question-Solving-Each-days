// Given a string s, find the length of the longest
// substring
// without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" i


let s = "pwwkew";
let string = "The answer is wke, with the length of 3";

const longestSubString = (string = null, char = null) =>{
    let splits  = string;
    let character  = char;
    let matchString;
    let count = 0;
    if(splits === null || character == null || splits === ""){
        return count;
    }else{
         splits = splits.split(' ');
         splits.forEach(element => {
            let str = element.match(/\w/g).join("");
           let total = character.match(str);
            if(total != null){
                matchString =total              
                if(count < matchString[0].length){
                    count = total[0].length
                    console.log(count)                  
                }
            }
        
       });

      
    }

    return count
   
}

longestSubString(string,s)