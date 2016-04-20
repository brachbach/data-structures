var Stack = function() {
  var newStack = {};
  newStack.length = 0;
  newStack.data = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.data[this.length++] = value;
};

stackMethods.pop = function(value) {
  if (this.length > 0) {
    var popped = this.data[this.length - 1];
    this.length--;
    return popped;
  }

  return null;
};