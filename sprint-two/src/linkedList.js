var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.length++;
  };

  list.removeHead = function() {
    var currentHead = list.head;
    list.head = list.head.next;
    currentHead.next = null;
    list.length--;
    return currentHead.value;
  };
  
  // list.remove = function(value) {
  //   var currentVal = list.head;
  //   var nextNode = currentVal.next;
  //   var prevNode;
  //   while (currentVal) {
  //     if (currentVal.value === value) {

  //     }
  //   }
  // };

  list.contains = function(target) {
    var input = list.head;
    var isTrue = false;
    while (input) {
      if (input.value === target) {
        isTrue = true;
      }
      input = input.next;
    }
    return isTrue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */