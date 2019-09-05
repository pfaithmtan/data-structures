var Queue = function() {
  var someInstance = {};

  someInstance.queueSize = 0;
  someInstance.firstIdx = 0;
  someInstance.lastIdx = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.lastIdx] = value;

    someInstance.lastIdx += 1;
    someInstance.queueSize += 1;
  };

  someInstance.dequeue = function() {
    const firstEl = storage[someInstance.firstIdx];

    delete storage[someInstance.firstIdx];

    if (someInstance.queueSize > 0) {
      someInstance.queueSize -= 1;
      someInstance.firstIdx += 1;
    }

    return firstEl;
  };

  someInstance.size = function() {
    return someInstance.queueSize;
  };

  return someInstance;
};
