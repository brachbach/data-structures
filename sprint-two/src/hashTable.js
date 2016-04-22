

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);
  if (!element) {
    var newTupleArray = tupleArray();
    newTupleArray.set(k, v);
    this._storage.set(index, newTupleArray);
  } else {
    element.set(k, v);
  }
};

//retrieve takes in keys, returns values
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    return this._storage.get(index).get(k);
  } 
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


