var Stack = function() {
  var someInstance = {};

  someInstance.stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.stackSize += 1;
  };

  someInstance.pop = function() {
    someInstance.stackSize -= 1;
  };

  someInstance.size = function() {
    return someInstance.stackSize;
  };

  return someInstance;
};
