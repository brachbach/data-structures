var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  newBST.getSide = function(value) {
    var result = (value < this.value ? 'left' : 'right');
    return result;
  };

  newBST.insert = function (value) {
    var side = this.getSide(value);
    if (this[side]) {
      this[side].insert(value);
    } else {
      this[side] = BinarySearchTree(value);
    }
  };

  newBST.contains = function (value) {
    if (this.value === value) {
      return true;
    }
    var side = this.getSide(value);
    if (this[side]) {
      return this[side].contains(value);
    } else {
      return false;
    }
  };
  newBST.depthFirstLog = function (callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }

    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  };

  return newBST;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
