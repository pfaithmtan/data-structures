var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  newQueue.queueSize = 0;
  newQueue.firstIdx = 0;
  newQueue.lastIdx = 0;
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this[this.lastIdx] = value;

    this.lastIdx += 1;
    this.queueSize += 1;
  },

  dequeue: function() {
    const firstEl = this[this.firstIdx];

    delete this[this.firstIdx];

    if (this.queueSize > 0) {
      this.queueSize -= 1;
    }

    this.firstIdx += 1;

    return firstEl;
  },

  size: function() {
    return this.queueSize;
  }
};

