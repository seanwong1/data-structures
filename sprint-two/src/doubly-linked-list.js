var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };
  
  list.removeHead = function() {
    var nextHead = this.head.next;
    var result = this.head.value;
    this.head.next = null;
    this.head = nextHead;
    nextHead.previous = null;
    return result;
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  list.removeTail = function() {
    var prev = this.tail.previous;
    prev.next = null;
    this.tail = prev;
  };

  list.addToHead = function(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  };


  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;
  return node;
};


var test = doublyLinkedList();
test.addToTail(3);
test.addToTail(7);
test.addToTail(19);
test.addToTail(13);
test.addToTail(37);
test.addToHead(777);
test.removeHead();
test.removeTail();
console.log(test);
console.log(test.contains(19));