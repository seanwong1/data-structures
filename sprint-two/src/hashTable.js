var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
    this._length++;
  } else if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return v;
      }
    }
    this._length++;
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var result;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (k === this._storage[index][i][0]) {
      result = this._storage[index][i][1];
      this._storage[index][i][1] = undefined;
    }
  }
  this._length--;
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
