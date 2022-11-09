var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create var createNewTree
  var createNewTree = Tree(value);
    //set value equal to input value
  this.children.push(createNewTree);
// pushcreatedNewTree into tree.children
};

treeMethods.contains = function(target, node) {
  //if the lengthof newtree children is 0
  if (this.children.length === 0) {
    //iftagetequals value
    if (this.value === target) {
      return true;
    }
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.value === target) {
        return true;
      } else {
        treeMethods.contains(target, this.children[i]);
      }

    }
  }
  //else loopthrough each of the children
    //checkif the value is equal to target
  //calltreemethods.contains(target, this.children[i])

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
