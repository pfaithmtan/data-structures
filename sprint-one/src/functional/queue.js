var Queue = function() {
  var someInstance = {};

  someInstance.queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return someInstance.queueSize;
  };

  return someInstance;
};
