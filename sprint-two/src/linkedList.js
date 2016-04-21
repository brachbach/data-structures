var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function() {
    var formerHead = this.head;
    this.head = this.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
    if (list.head) {
      var currentNode = list.head;
      while (currentNode !== null) {
        if (currentNode.value === target) {
          return true;
        }
        currentNode = currentNode.next;
      }

      return false;
    }
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
