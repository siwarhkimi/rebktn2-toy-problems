/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two 
stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function(value) {
    storage.push(value);
  };

  this.pop = function() {
      return storage.pop();     
  };

  this.size = function() {
    return storage.length
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
    inbox.push(value);
  };

  this.dequeue = function() {
    outbox = inbox.reverse();// I know that inbox is not an array, it is a copy of Slack so .reverse() doesn't work 
    return outbox.pop()
  };

  this.size = function() {
      return inbox.size();
  };
};
