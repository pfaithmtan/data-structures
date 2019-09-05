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

  }

  size() {
    return this.stackSize;
  }
}