interface TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
  }

  interface Tree<T> {
    insert(data: T): void;
    delete(data: T): void;
    traverseInorder(): T[];
    traversePreorder(): T[];
    traversePostorder(): T[];
    traverseBFS(): T[];
    getMax(): T | null;
    getMin(): T | null;
    isEmpty(): boolean;
  }

  // TODO - Binary Search Tree

  export default class BinaryTree<T> implements Tree<T> {
    private root: TreeNode<T> | null = null;

    insert(data: T): void {
      // Your implementation here
    }

    delete(data: T): void {
      // Your implementation here
    }

    traverseInorder(): T[] {
      // Your implementation here
    }

    traversePreorder(): T[] {
      // Your implementation here
    }

    traversePostorder(): T[] {
      // Your implementation here
    }

    traverseBFS(): T[] {
      // Your implementation here
    }

    getMax(): T | null {
      // Your implementation here
    }

    getMin(): T | null {
      // Your implementation here
    }

    isEmpty(): boolean {
      // Your implementation here
    }
  }
