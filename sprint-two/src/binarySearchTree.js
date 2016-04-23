var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  newBST.getSide = function(value) {
    var result = (value < this.value ? 'left' : 'right');
    return result;
  };

  newBST.insertHelper = function(value) {
    var side = this.getSide(value);
    if (this[side]) {
      this[side].insert(value);
    } else {
      this[side] = BinarySearchTree(value);
    }
  };


  newBST.insert = function (value) {

    this.insertHelper(value);

    if (this.minHeight() * 2 < this.maxHeight()) {
      this.rebalance();
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

  newBST.depthFirstEach = function (callback) {
    if (this.left) {
      this.left.depthFirstEach(callback);
    }

    callback(this);

    if (this.right) {
      this.right.depthFirstEach(callback);
    }

  };

  newBST.minHeight = function() {
    var minHeightHelper = function(tree, count) {

      var leftHeight = count;
      var rightHeight = count;
      // debugger;
      if (tree.left) {
        leftHeight = minHeightHelper(tree.left, count + 1);
      }
      if (tree.right) {
        rightHeight = minHeightHelper(tree.right, count + 1);
      }
      return Math.min(leftHeight, rightHeight);
    };
    return minHeightHelper(this, 1);
  };

  newBST.maxHeight = function() {
    var maxHeightHelper = function(tree, count) {

      var leftHeight = count;
      var rightHeight = count;
      // debugger;
      if (tree.left) {
        leftHeight = maxHeightHelper(tree.left, count + 1);
      }
      if (tree.right) {
        rightHeight = maxHeightHelper(tree.right, count + 1);
      }
      return Math.max(leftHeight, rightHeight);
    };
    return maxHeightHelper(this, 1);
  };

  newBST.rebalance = function() {
  
    var nodeArray = [];
    var middle;
    this.depthFirstEach(function(node) {
      nodeArray.push(node.value);
    });

    middle = Math.floor(nodeArray.length / 2);

    this.value = nodeArray[middle];
    this.left = null;
    this.right = null;

    leftHalf = nodeArray.slice(0, middle);
    rightHalf = nodeArray.slice(middle + 1);
    this.recursiveInsertion(leftHalf);
    this.recursiveInsertion(rightHalf);
  };

  newBST.recursiveInsertion = function (array) {
    middle = Math.floor(array.length / 2);
    this.insertHelper(array[middle]);
    leftHalf = array.slice(0, middle);
    rightHalf = array.slice(middle + 1);

    if (leftHalf.length > 0) {
      this.recursiveInsertion(leftHalf);
    }

    if (rightHalf.length > 0) {
      this.recursiveInsertion(rightHalf);
    }
  };

  newBST.bfs = function () {
    var array = [];
    var search = function(value) {
      // var output;
      // depthFirstEach(function(node) {
      //   if (value === node.value) {
      //     return node;
      //   }
      // });

      // return output;
    };

    var bfsHelper = function(tree) {
      array.push(tree.value);
      bfsHelper(tree.left);
      bfsHelper(tree.right);
    };

  };
  return newBST;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
