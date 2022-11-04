var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    var key = Object.keys(this.storage)[0];
    var value = Object.values(this.storage)[0];
    delete this.storage[key];
    return value;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};