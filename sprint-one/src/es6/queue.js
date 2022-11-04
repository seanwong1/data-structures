class Queue {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var key = Object.keys(this.storage)[0];
    var value = Object.values(this.storage)[0];
    delete this.storage[key];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
