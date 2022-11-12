var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = 'this now exists';
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.union = function(set) {
  var newSet = Set();
  newSet._storage = this._storage;
  var keys = Object.keys(set._storage);
  for (var i = 0; i < keys.length; i++) {
    newSet.add(keys[i]);
  }
  return newSet;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
