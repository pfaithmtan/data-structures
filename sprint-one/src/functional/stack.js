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
    const lastEl = storage[someInstance.stackSize - 1];

    delete storage[someInstance.stackSize - 1];

    if (someInstance.stackSize > 0) {
      someInstance.stackSize -= 1;
    }

    return lastEl;
  };

  someInstance.size = function() {
    return someInstance.stackSize;
  };

  return someInstance;
};
