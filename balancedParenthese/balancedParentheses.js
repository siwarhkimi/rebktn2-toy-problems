/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var array = str.split('');
    var leftParenthesesNumber = 0;
    var rightParenthesesNumber = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] === "("){
            leftParenthesesNumber += 1;
        } else if(array[i] === ")") {
            rightParenthesesNumber += 1;
        }
    }
    if(leftParenthesesNumber === rightParenthesesNumber) {
        return true;
    } else {
        return false;
    }
};
