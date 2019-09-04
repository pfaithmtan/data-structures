var Stack = function() {
  var someInstance = {};

  someInstance.stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.stackSize] = value;

    someInstance.stackSize += 1;
  };

  someInstance.pop = function() {
    const lastEl = delete storage[someInstance.stackSize];

    if (someInstance.stackSize > 0) {
      someInstance.stackSize -= 1;
    } else {
      someInstance.stackSize = 0;
    }

    return lastEl;
  };

  someInstance.size = function() {
    return someInstance.stackSize;
  };

  return someInstance;
};
