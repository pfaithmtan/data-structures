var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);

    // Make sure we already have a head, tail
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      if (list.head === list.tail) {
        list.tail = null;
      }
      // Get former head, set head to next node or null
      const oldHead = list.head;
      list.head = list.head.next;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    recursive = function(currNode, target) {
      if (currNode.value === target) {
        return true;
      }
      if (currNode.next === null) {
        return false;
      }
      return recursive(currNode.next, target);
    };
    if (list.head) {
      return recursive(list.head, target);
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
