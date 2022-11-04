var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
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

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};