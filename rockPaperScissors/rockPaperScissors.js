/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (number) {
  var rps = ['R','P','S'];
  var array = [];
  var arr =[];

  for(var i = 0; i < rps.length; i++) {
    array.push([rps[i]])
    if(number === array.length || number === 3) {
      arr.push(array[i])
    }
    rockPaperScissors()

  }
};
