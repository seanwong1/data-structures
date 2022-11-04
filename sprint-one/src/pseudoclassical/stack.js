var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var key = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  var value = Object.values(this.storage)[Object.values(this.storage).length - 1];
  delete this.storage[key];
  return value;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}