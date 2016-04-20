var Queue = function() {
  this.front = 0;
  this.end = 0;
  this.data = {};
};

Queue.prototype.size = function() {
  return this.end - this.front;
};

Queue.prototype.enqueue = function(value) {
  this.data[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var dequeued = this.data[this.front];
    this.front++;
    return dequeued;
  }
  return null;
};