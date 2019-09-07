

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // Get index for insertion
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Get objay at this._storage[index]
  let obj = this._storage.get(index);
  // If obj is undefined, create an objay; else push to obj
  if (!obj) {
    obj = {};
  }
  obj[k] = v;
  // Set obj into storage
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  // Get index for key-value pair
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Get obj at this._storage[index]
  const obj = this._storage.get(index);
  // Check if undefined
  if (!obj) {
    return undefined;
  } else {
    return obj[k];
  }
};

HashTable.prototype.remove = function(k) {
  // Get index for key-value pair to remove
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Get obj at this._storage[index]
  const obj = this._storage.get(index);
  // If obj is not undefined:
  if (obj[k]) {
    // Delete obj[k]
    delete obj[k];
  }
  // Set obj into storage
  this._storage.set(index, obj);
};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable.insert(): O(1)
 HashTable.retrieve(): O(1)
 HashTable.remove(): O(1)
 */


