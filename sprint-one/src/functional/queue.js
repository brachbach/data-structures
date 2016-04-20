var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.length = 0;
  storage.front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.length++;
    storage[storage.length] = value;
  };

  someInstance.dequeue = function() {
    if(storage.length > storage.front) {
      storage.front++;
      return storage[storage.front];
    }


    return 0;
  };

  someInstance.size = function() {
    return storage.length -storage.front;
  };

  return someInstance;
};
