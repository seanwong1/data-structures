var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    var key = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    var value = Object.values(this.storage)[Object.values(this.storage).length - 1];
    delete this.storage[key];
    return value;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};