var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me
  newTree.childLength = newTree.children.length;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var createNewTree = Tree(value);
  this.children.push(createNewTree);
  this.childLength++;
};

treeMethods.contains = function(target, tree = this) {
  if (tree.value === target) {
    return true;
  } else {
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.contains(target, tree.children[i])) {
        return true;
      }
    }
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
