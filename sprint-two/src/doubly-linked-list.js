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
    console.log(this.tail);

  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  list.removeTail = function() {
  };

  list.addToHead = function(value) {
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