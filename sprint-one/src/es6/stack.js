class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
  }

  push(value) {
    this[this.stackSize] = value;

    this.stackSize += 1;
  }

  pop() {
    const lastEl = this[this.stackSize - 1];

    delete this[this.stackSize - 1];

    if (this.stackSize > 0) {
      this.stackSize -= 1;
    }

    return lastEl;
  }

  size() {
    return this.stackSize;
  }
}