var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //var bucket = [];

  if (!this._storage[index]) {
    //this._storage.set(index, []);
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else if (this._storage[index]) {
    //this._sotrage[index].push([k, v])
    //else {}
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return v;
      }
    }
    this._storage[index].push([k, v]);
  }
  // console.log(this._storage[index]);
  // this._storage.set(index, v);
  //this._storage.set(index, [k, v])
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var result;
  for (var i = 0; i < bucket.length; i++) {
    console.log('bucket', bucket[i][0]);
    if (bucket[i][0] === k) {
      // return bucket[i][1];
      result = bucket[i][1];
    }
  }
  return result;
  // return this._storage.get(index);
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
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
