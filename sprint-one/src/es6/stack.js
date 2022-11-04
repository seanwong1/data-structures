class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var key = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    //var key = Object.keys(this.storage)[this.size];
    //console.log(this.size);
    var value = Object.values(this.storage)[Object.values(this.storage).length - 1];
    delete this.storage[key];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}