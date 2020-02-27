

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.recreateStorage = function() {
  // Loop over storage and return new array that mimics storage
  const newStorage = [];
  this._storage.each((element) => {
    newStorage.push(element);
  });
  return newStorage;
};

HashTable.prototype.getPercentFull = function() {
  // Record space taken
    // Loop through storage
      // if !undefined and obj.keys.length
        // increment space taken
  // return space taken / this._limit

  let spaceTaken = 0;
  const currStorage = this.recreateStorage();

  for (let i = 0; i < currStorage.length; i++) {
    if (currStorage[i] && Object.keys(currStorage[i]).length) {
      spaceTaken++;
    }
  }

  return spaceTaken / this._limit;
};

HashTable.prototype.reduceSize = function() {
  // set limit = floor(limit / 2)
  // store old storage as variable
  // create, set new storage
  // loop through old storage
    //  if !undefined and obj.keys.length
      // insert into storage

  const oldStorage = this.recreateStorage();
  this._limit = Math.floor(this._limit / 2);
  this._storage = LimitedArray(this._limit);

  for (let i = 0; i < oldStorage.length; i++) {
    if (oldStorage[i] && Object.keys(oldStorage[i]).length) {
      const obj = oldStorage[i];
      for (let j = 0; j < Object.keys(obj).length; j++) {
        const k = Object.keys(obj)[j];
        const v = obj[k];
        this.insert(k, v);
      }
    }
  }
};


HashTable.prototype.increaseSize = function() {
  // Check if space taken is greater than 0.75 * limit
  // set limit = floor(limit * 2)
  // store old storage as variable
  // create, set new storage
  // loop through old storage
    //  if !undefined and obj.keys.length
      // insert into storage

  const oldStorage = this.recreateStorage();
  this._limit = Math.floor(this._limit * 2);
  this._storage = LimitedArray(this._limit);

  for (let i = 0; i < oldStorage.length; i++) {
    if (oldStorage[i] && Object.keys(oldStorage[i]).length) {
      const obj = oldStorage[i];
      for (let j = 0; j < Object.keys(obj).length; j++) {
        const k = Object.keys(obj)[j];
        const v = obj[k];
        this.insert(k, v);
      }
    }
  }
};

HashTable.prototype.logStorage = function() {
  this._storage.each((element, index, storage) => {
    console.log(storage);
  });
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

  // if necessary, resize storage
  if (this.getPercentFull() >= 0.625) {
    this.increaseSize();
  }
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

  // if necessary, resize storage
  if (this.getPercentFull() < 0.25) {
    this.reduceSize();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable.insert(): O(1)
 HashTable.retrieve(): O(1)
 HashTable.remove(): O(1)
 */


