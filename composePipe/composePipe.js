/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * welcome('phillip') = compose(greet, exclaim)('phillip')
 *                    = compose(function(name){ return 'hi: ' + name;}, function(statement) { return statement.toUpperCase() + '!';})('phillip')
 *                    = 'hi: PHILLIP!'
 * 
 * 
 * compose(greet, exclaim) {
 * function main(x) {
 * greet(x) // hi: phillip
 * exclaim(x) // PHILLIP!
 * 
 * greet(exclaim(x)) // hi: PHILLIP!
 * f1(f2(f3(f4(x))))
 * 
 * f4(x)
 * f3(f4(x))
 * f2(f3(f4(x)))
 * f1(f2(f3(f4(x))))
 * for(var i = arguments.length; i >0 ; i-2) {
 * 
 * f = f(i-1)(fi())
 * 
 * 
 * }
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * return main
 * 
 * }
 * 
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 * 
 * multiplyBy3(add2(5))
 * 
 * f4(f3(f2(f1(x))))
 * 
 * 
 */

'use strict';
// my idea is to take all the arguments one by one using 'arguments' because they are unknown and then to apply the first argument to the next one to the next one and so on
// 
var compose = function() {
   var args = Array.prototype.slice.call(arguments);// to convert the arguments into an array so that I can get access to all arguments when looping inside the array
   var i = args.length - 1;
   //var myFunction  = function(){};
  
   var result = function myFunction(firstVal) {
      while(i >= 0) {
        val = args[i](firstVal);
        i--;
        return myFunction(val); 
      }
  }
  return result;
};

var pipe = function() {
};
