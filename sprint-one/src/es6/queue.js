class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.firstIdx = 0;
    this.lastIdx = 0;
  }

  enqueue(value) {
    this[this.lastIdx] = value;

    this.lastIdx += 1;
    this.queueSize += 1;
  }

  dequeue() {
    const firstEl = this[this.firstIdx];

    delete this[this.firstIdx];

    if (this.queueSize > 0) {
      this.queueSize -= 1;
      this.firstIdx += 1;
    }

    return firstEl;
  }

  size() {
    return this.queueSize;
  }
}
