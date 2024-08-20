// Longest Substring without repeating charcaters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // let index = 0;
    let maxSubStringLength = 0;
    let currentChar = 0;
    let substringIndexHolderMap = new Map();
    let start = 0;

    for(var index = 0 ; index < s.length; index++ ){
        let currentChar = s[index]; // takes the character at the current index in the loop 
        //check to see if map already has the new letter in the substring
        if (substringIndexHolderMap.has(currentChar) && substringIndexHolderMap.get(currentChar) >= start ){ // check if character already exists and if it is in the current window.
            start = substringIndexHolderMap.get(currentChar) +1; // if the current character is duplicate and exists within the current window. we set the new start to the index after the original charcater that has a duplicate.
        }
        
        substringIndexHolderMap.set(currentChar, index); // add current character to map with its associated index.
        currentLength = index - start +1; // calculate curret length of substring using the current window.= index - start +1; +1 is because index is  because of the max index is one less than the actual length.

        maxSubStringLength = Math.max(maxSubStringLength,currentLength);// keep the max length comparing current and max
    }
    return maxSubStringLength
    
}
