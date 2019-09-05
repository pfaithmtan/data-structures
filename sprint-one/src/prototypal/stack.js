var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const newStack = Object.create(stackMethods);

  newStack.stackSize = 0;

  return newStack;
};

const stackMethods = {
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


