const bst = new BinarySearchTree()

// insert
bst.insert(10, 'A');
bst.insert(5, 'B');
bst.insert(15, 'C');
bst.insert(3, 'D');
bst.insert(8, 'E');
bst.insert(12, 'F');
bst.insert(18, 'G');

// delete
bst.delete(5);

// walk
console.log(bst.walk());

