// [ ] - Continue
const bst = new BinarySearchTree()

// insert
bst.insert(15, 'A')
bst.insert(6, 'Y')
bst.insert(18, 'Q')
bst.insert(17, 'W')
bst.insert(20, 'E')

// walk
console.log(bst.walk())

console.log(bst.getSuccessor(13))
console.log(bst.getSuccessor(17))
console.log(bst.getSuccessor(20))
