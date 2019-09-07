class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(nodeToInsert) {

    // To the left
    if (nodeToInsert < this.value) {
      if (this.left) {
        this.left.insert(nodeToInsert);
      } else {
        this.left = new BinarySearchTree(nodeToInsert);
      }
    }

    // To the right
    if (nodeToInsert > this.value) {
      if (this.right) {
        this.right.insert(nodeToInsert);
      } else {
        this.right = new BinarySearchTree(nodeToInsert);
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  depthFirstLog(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
