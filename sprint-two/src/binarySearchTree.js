// class BinarySearchTree {
// // var BinarySearchTree = function(value) {
//   constructor(value) {
//     console.log(value);
//     this.root = null;
//     this.val = value;
//     this.left = null;
//     this.right = null;
//   }
//   insert(value) {
//     var newTree = new BinarySearchTree(value);
//     console.log(typeof this.insert);
//     if (!this.root) {
//       this.root = newTree;
//     } else if (value < this.val) {
//       this.left = newTree;
//     } else if (value > this.val) {
//       this.right = newTree;
//     }
//   }

//   contains(value) {

//   }

//   depthFirstLog(cb) {

//   }
// }

var BinarySearchTree = function(value) {
  var obj = Object.create(methods);
  obj.root = null;
  obj.left = null;
  obj.right = null;
  obj.value = value;
  obj.count = 0;
  return obj;
};

var methods = {};

methods.insert = function(value, tree = this) {
  var newTree = BinarySearchTree(value);
  tree.count++;
  // console.log(typeof this.insert);
  //if (!tree) {
  // tree = newTree;
  if (value < tree.value && !tree.left) {
    // console.log('newTree', newTree);
    tree.left = newTree;
    // console.log('tree', tree);
  } else if (value > tree.value && !tree.right) {
    tree.right = newTree;
  } else {
    if (value < tree.value) {
      tree.insert(value, tree.left);
    } else if (value > tree.value) {
      tree.insert(value, tree.right);
    }
  }
  // console.log(this);
  return tree;
};

// methods.contains = function(value) {
//   var doesContain = false;
//   // console.log('doescontain', doesContain);
//   var helper = function(value, tree = this) {
//     console.log('this--->', tree.value, value);
//     var current;
//     if (tree.value === value) {
//       doesContain = true;
//       return doesContain;
//     } else {
//       if (!tree.left && !tree.right) {
//         return false;
//       } else if (tree.value < value) {
//         console.log('hello');
//         doesContain = tree.contains(value, tree.right);
//       } else if (tree.value > value) {
//         doesContain = tree.contains(value, tree.left);
//       }
//     }
//     return doesContain;
//   };
//   doesContain = helper(value);
//   return doesContain;
// };

methods.contains = function(value, tree = this) {
  var doesContain = false;
  if (tree.value === value) {
    doesContain = true;
    return doesContain;
  } else {
    if (!tree.left && !tree.right) {
      return false;
    } else if (tree.value < value) {
      doesContain = tree.contains(value, tree.right);
    } else if (tree.value > value) {
      doesContain = tree.contains(value, tree.left);
    }
  }
  return doesContain;
};

methods.depthFirstLog = function(cb, tree = this) {
  cb(tree.value);
  if (tree.left) {
    tree.depthFirstLog(cb, tree.left);
  }
  if (tree.right) {
    tree.depthFirstLog(cb, tree.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
