var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const newStack = {};
  newStack.stackSize = 0;
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    this[this.stackSize] = value;

    this.stackSize += 1;
  },

  pop: function() {
    const lastEl = this[this.stackSize - 1];

    delete this[this.stackSize - 1];

    if (this.stackSize > 0) {
      this.stackSize -= 1;
    }

    return lastEl;
  },

  size: function() {
    return this.stackSize;
  }
};

