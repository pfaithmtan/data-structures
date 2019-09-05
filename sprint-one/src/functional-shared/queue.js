var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  const newQueue = {};
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

  },

  dequeue: function() {

  },

  size: function() {

  }
};

