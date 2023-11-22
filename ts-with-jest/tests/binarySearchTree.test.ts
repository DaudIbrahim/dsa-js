import BinaryTree from '../src/binarySearchTree'

describe('Binary Search Tree', () => {
    it('should insert elements and maintain BST property', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        // After insertion, the tree should look like:
        //        10
        //       /  \
        //      5    15
        //     / \  /  \
        //    3  8 12  18

        expect(bst.traverseInorder()).toEqual([3, 5, 8, 10, 12, 15, 18]);
    });

    it('should delete elements and maintain BST property (case 1: leaf node)', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        bst.delete(18);

        // After deletion of 18 (leaf node), the tree should look like:
        //        10
        //       /  \
        //      5    15
        //     / \  /
        //    3  8 12

        expect(bst.traverseInorder()).toEqual([3, 5, 8, 10, 12, 15]);
    });

    it('should delete elements and maintain BST property (case 2: node with one child)', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        bst.delete(15);

        // After deletion of 15 (node with one child), the tree should look like:
        //        10
        //       /  \
        //      5    18
        //     / \
        //    3  8
        //       \
        //       12

        expect(bst.traverseInorder()).toEqual([3, 5, 8, 10, 12, 18]);
    });

    it('should delete elements and maintain BST property (case 3: node with two children)', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        bst.delete(10);

        // After deletion of 10 (node with two children), the tree should look like:
        //        12
        //       /  \
        //      5    15
        //     / \     \
        //    3   8     18

        expect(bst.traverseInorder()).toEqual([3, 5, 8, 12, 15, 18]);
    });

    it('should find maximum and minimum values', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        expect(bst.getMax()).toBe(18);
        expect(bst.getMin()).toBe(3);
    });

    it('should check if the tree is empty', () => {
        const emptyBst = new BinaryTree<number>();
        const nonEmptyBst = new BinaryTree<number>();
        nonEmptyBst.insert(10);

        expect(emptyBst.isEmpty()).toBe(true);
        expect(nonEmptyBst.isEmpty()).toBe(false);
    });

    it('should traverse the tree in inorder', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        // The inorder traversal should return [3, 5, 8, 10, 12, 15, 18]
        expect(bst.traverseInorder()).toEqual([3, 5, 8, 10, 12, 15, 18]);
    });

    it('should traverse the tree in preorder', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        // The preorder traversal should return [10, 5, 3, 8, 15, 12, 18]
        expect(bst.traversePreorder()).toEqual([10, 5, 3, 8, 15, 12, 18]);
    });

    it('should traverse the tree in postorder', () => {
        const bst = new BinaryTree<number>();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(12);
        bst.insert(18);

        // The postorder traversal should return [3, 8, 5, 12, 18, 15, 10]
        expect(bst.traversePostorder()).toEqual([3, 8, 5, 12, 18, 15, 10]);
    });
});
