var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queueSize = 0;
  this.firstIdx = 0;
  this.lastIdx = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.lastIdx] = value;

  this.lastIdx += 1;
  this.queueSize += 1;
};

Queue.prototype.dequeue = function() {
  const firstEl = this[this.firstIdx];

  delete this[this.firstIdx];

  if (this.queueSize > 0) {
    this.queueSize -= 1;
    this.firstIdx += 1;
  }

  return firstEl;
};

Queue.prototype.size = function() {
  return this.queueSize;
};

