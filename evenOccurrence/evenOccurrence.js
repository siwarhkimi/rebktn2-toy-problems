/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items
 and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(array) {
    var myObj = {}
   
    for(var i = 0; i < array.length; i++) {
        var key = array[i];
        if (myObj[key]) {
            myObj[key] = myObj[key]+1
        } else {
            myObj[key] = 1
        }     
    }

    var myObjValues = Object.values(myObj);
    var myObjKeys = Object.keys(myObj)
    for(var i = 0; i < myObjValues.length; i++) {
        if(myObjValuesc[i] % 2 === 0) {
            return myObjKeys[i]
        }
    }
    return null
    
}



























