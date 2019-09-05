var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  this[this.stackSize] = value;

  this.stackSize += 1;
};

Stack.prototype.pop = function() {
  const lastEl = this[this.stackSize - 1];

  delete this[this.stackSize - 1];

  if (this.stackSize > 0) {
    this.stackSize -= 1;
  }

  return lastEl;
};

Stack.prototype.size = function() {
  return this.stackSize;
};

