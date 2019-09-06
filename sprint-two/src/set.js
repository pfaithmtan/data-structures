var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};

  // Add methods from setPrototype to set
  set.add = setPrototype.add;
  set.contains = setPrototype.contains;
  set.remove = setPrototype.remove;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item to object
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  // use hasOwnProperty to see if item is in object
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  // delete item from object
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 Set.add(): O(1)
 Set.contains(): O(1)
 Set.remove(): O(1)
 */
