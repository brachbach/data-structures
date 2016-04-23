describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.left.left.value).to.equal(3);
    expect(binarySearchTree.right.right.value).to.equal(7); //Changed to account for automatic rebalancing
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 4, 6]);
  });

  it('should have methods named maxHeight, minHeight, and rebalance', function() {
    expect(binarySearchTree.maxHeight).to.be.a('function');
    expect(binarySearchTree.minHeight).to.be.a('function');
    expect(binarySearchTree.rebalance).to.be.a('function');

  });

  it('should have a working maxHeight', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    expect(binarySearchTree.maxHeight()).to.equal(4);
  });

  it('should have a working minHeight', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    expect(binarySearchTree.minHeight()).to.equal(2);
  });

  it('should have a working rebalance', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.rebalance();
    expect(binarySearchTree.maxHeight()).to.equal(3);
  });

  it('should rebalance automatically when maxHeight > (minHeight *2)', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    expect(binarySearchTree.maxHeight()).to.equal(4);
  });

  it('should have working bfs', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    expect(binarySearchTree.bfs()).to.equal([]);
  });

});
