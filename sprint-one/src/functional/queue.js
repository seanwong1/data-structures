var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var key = Object.keys(storage)[0];
    var value = Object.values(storage)[0];
    delete storage[key];
    for (var i = 1; i < someInstance.size; i++) {
        storage[i - 1] = storage[i];
        delete storage[i];
    }
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
