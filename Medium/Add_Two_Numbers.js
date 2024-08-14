/**
Question infromation 2. Add Two Numbers
Solved
Medium

Topics
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 /**
 * @param {ListNode} l1
 * @param {ListNode} l2

 * @return {ListNode}
 */
function linkedlistToBigInt(){

}

function linkedlistToNumber(ll){
    let current1 = ll;
    var var1 = BigInt(0);
    var multiplier1= BigInt(1);
    while(current1 !== null){
        var1= var1 + BigInt(current1.val) * multiplier1;
        multiplier1 *= BigInt(10);
        current1=current1.next;  
    }
    return var1;

}
function numberToLinkedList(l3,number){

    if (number === 0n){
        l3.val=0;
        return l3;
    }else{
        let current = l3;
        while(number > 0n){
            
            var temp1 = number % 10n;
            current.val= temp1;
            number = number/10n;
            if(number > 0n){
                current.next= new ListNode();
                current= current.next;
            }
            
            
        }
        return l3;
    }
}


var addTwoNumbers = function(l1, l2) {
    var num1 = linkedlistToNumber(l1);
    var num2 = linkedlistToNumber(l2);
    let sum = num1 + num2;
    let l3 = new ListNode();
    
    return numberToLinkedList(l3,sum)
    
}
