import BinarySearchTree from '../src/binarySearchTree'

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree<string>();
  });

  it('should insert elements and maintain BST property', () => {
    bst.insert(10, 'A');
    bst.insert(5, 'B');
    bst.insert(15, 'C');
    bst.insert(3, 'D');
    bst.insert(8, 'E');
    bst.insert(12, 'F');
    bst.insert(18, 'G');

    // After insertion, the tree should look like:
    //        10
    //       /  \
    //      5    15
    //     / \  /  \
    //    3  8 12  18

    expect(bst.walk()).toEqual([3, 5, 8, 10, 12, 15, 18]);
  });

  it('should search for elements', () => {
    bst.insert(10, 'A');
    bst.insert(5, 'B');
    bst.insert(15, 'C');

    expect(bst.search(10)).toEqual([10, 'A']);
    expect(bst.search(5)).toEqual([5, 'B']);
    expect(bst.search(15)).toEqual([15, 'C']);
    expect(bst.search(7)).toBeNull(); // Element not present in the tree
  });

  it('should find maximum and minimum values', () => {
    bst.insert(10, 'A');
    bst.insert(5, 'B');
    bst.insert(15, 'C');
    bst.insert(3, 'D');
    bst.insert(8, 'E');
    bst.insert(12, 'F');
    bst.insert(18, 'G');

    expect(bst.getMax()).toEqual([18, 'G']);
    expect(bst.getMin()).toEqual([3, 'D']);
  });

  it('should check if the tree is empty', () => {
    const emptyBst = new BinarySearchTree<string>();
    const nonEmptyBst = new BinarySearchTree<string>();
    nonEmptyBst.insert(10, 'A');

    expect(emptyBst.isEmpty()).toBe(true);
    expect(nonEmptyBst.isEmpty()).toBe(false);
  });

  it('should get the successor of a node', () => {
    bst.insert(10, 'A');
    bst.insert(5, 'B');
    bst.insert(15, 'C');
    bst.insert(3, 'D');
    bst.insert(8, 'E');
    bst.insert(12, 'F');
    bst.insert(18, 'G');

    expect(bst.getSuccessor(10)).toEqual([12, 'F']);
    expect(bst.getSuccessor(5)).toEqual([8, 'E']);
    expect(bst.getSuccessor(15)).toEqual([18, 'G']);
    expect(bst.getSuccessor(18)).toBeNull(); // No successor for the maximum node
  });

  it('successor of a node 3 cases', () => {
    bst.insert(15, 'A')

    bst.insert(6, 'Y')
    bst.insert(7, 'B')
    bst.insert(13, 'C')

    bst.insert(18, 'Q')
    bst.insert(17, 'W')
    bst.insert(20, 'E')

    expect(bst.getSuccessor(13)).toEqual([15, 'A'])
    expect(bst.getSuccessor(17)).toEqual([18, 'Q'])
    expect(bst.getSuccessor(20)).toBeNull()
  });

});
