var Stack = function() {
  this.length = 0;
  this.data = {};
};


Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.push = function(value) {
  this.data[this.length++] = value;
};

Stack.prototype.pop = function(value) {
  if (this.length > 0) {
    var popped = this.data[this.length - 1];
    this.length--;
    return popped;
  }

  return null;
};
