

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this.retrieve(index);
  // if (v === 'val1') {
  //   debugger;
  // }
  if (!element) {
    var newObject = {};
    newObject[k] = v;
    this._storage.set(index, newObject);
  } else {
    element[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (k === 'val2') {
    debugger;
  }
  return this._storage.get(index) ? this._storage.get(index)[k] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


