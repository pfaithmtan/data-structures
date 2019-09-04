var Queue = function() {
  var someInstance = {};

  someInstance.queueSize = 0;
  someInstance.firstIdx = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.queueSize] = value;

    someInstance.queueSize += 1;
  };

  someInstance.dequeue = function() {
    someInstance.queueSize -= 1;
  };

  someInstance.size = function() {
    return someInstance.queueSize;
  };

  return someInstance;
};
