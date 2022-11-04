var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var key = Object.keys(this.storage)[0];
  var value = Object.values(this.storage)[0];
  delete this.storage[key];
  return value;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}
