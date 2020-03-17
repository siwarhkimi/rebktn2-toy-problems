/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var arr = [];
  
  for (var i =0; i < string.length; i++) {
    if (!((string.slice(0, i)+string.slice(i+1, string.length)).includes(string.slice(i,i+1)))) {
      arr.push(string.slice(i,i+1))
    }
  }
  return arr[0]
};
