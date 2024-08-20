// Palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x >=0){
        
            let originalnumber = x;
            let revserednumber = 0;
            while(x>0){
                let lastdigit = x % 10; 
                revserednumber = revserednumber * 10 + lastdigit;
                x = Math.floor(x/10);
            }
            if(originalnumber === revserednumber){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
}