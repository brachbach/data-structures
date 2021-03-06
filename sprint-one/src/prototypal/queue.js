var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.end = 0;
  newQueue.front = 0;
  newQueue.data = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.end - this.front;
};

queueMethods.enqueue = function(value) {
  this.data[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var dequeued = this.data[this.front];
    this.front++;
    return dequeued;
  }
  return null;
};



