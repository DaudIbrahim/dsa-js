interface TreeNode<T> {
  key: number;
  data: T;
  parent: TreeNode<T> | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

interface Tree<T> {
  isEmpty(): boolean;
  walk(): number[];
  insert(key: number, data: T): void;
  search(key: number): [number, T] | null;
  getMax(): [number, T] | null;
  getMin(): [number, T] | null;
  delete(key: number): void;
  getSuccessor(key: number): [number, T] | null;
}

export default class BinarySearchTree<T> implements Tree<T> {

  private root: TreeNode<T> | null = null;

  private traverseInorder(node: null | TreeNode<T>, path: number[]): number[] {
    if (node === null) return []
    this.traverseInorder(node.left, path)
    path.push(node.key)
    this.traverseInorder(node.right, path)
    return path
  }

  private treeSearchRecursive(nodeToInitSearch: null | TreeNode<T>, key: number): null | TreeNode<T> {
    if (nodeToInitSearch === null) return null

    if (nodeToInitSearch.key === key) {
      return nodeToInitSearch
    } else if (nodeToInitSearch.key > key) {
      return this.treeSearchRecursive(nodeToInitSearch.left, key)
    } else {
      return this.treeSearchRecursive(nodeToInitSearch.right, key)
    }
  }

  private treeMinimum(node: TreeNode<T>): TreeNode<T> {
    while (node.left !== null) {
      node = node.left
    }

    return node
  }

  private treeMaximum(node: TreeNode<T>): null | TreeNode<T> {
    while (node.right !== null) {
      node = node.right
    }

    return node
  }

  /**
   * returns the successor of a node `x` in a binary search tree if it exists or null if x itslef is the last node
   * @param node
   * @description Must pass a valid node in the tree. It is the responsibility of treeSuccessor's caller to ensure tree is not empty
   */
  private treeSuccessor(node: TreeNode<T>): null | TreeNode<T> {
    // case #1 - right is non-empty; get the left most element, the Minimum
    if (node.right !== null) return this.treeMinimum(node.right)

    /**
     * Right is empty.
     * case #2 - x has a successor y, then y is the lowest ancestor of x whose left child is also an acestor of x.
     * Memorize: that every node is it's own ancestor.
     * Ref: CLRS #320.
     */
    let p = node.parent
    let a = node

    while (p !== null && p.right === a) {
      a = p // fixed mistake in the ordering 🚩, common at least be proficient in swap
      p = p.parent
    }

    return p
  }

  /**
   * The subroutine TRANSPLANT replaces one subtree as a child of its parent with another subtree. Transplant allows v to be nil.
   * Observe: when moving subtrees around within the BST you need to update both the child and parent
   * @param nodeU replace the subtree `rooted` at node `u`
   * @param nodeV with the subtree `rooted` at node `v`
   * @description The procedure TRANSPLANT does not attempt to update v.left and v.right.
   * Doing so, or not doing so, is the responsibility of TRANSPLANT's caller
   */
  private transplant(nodeU: TreeNode<T>, nodeV: null | TreeNode<T>) {
    if (this.isEmpty()) {
      throw new Error('Can only call transplant on an empty treyy')
    }

    // check if root
    if (nodeU.parent === null) {
      this.root = nodeV
    } else if (nodeU === nodeU.parent.left) {
      nodeU.parent.left = nodeV
    } else {
      nodeU.parent.right = nodeV
    }

    // child: update parent
    if (nodeV !== null) {
      nodeV.parent = nodeU.parent
    }
  }

  // CLRS Way
  delete(key: number): void {
    const nodeToDelete = this.treeSearchRecursive(this.root, key)
    if (nodeToDelete === null) return

    // no children
    if (nodeToDelete.left === null && nodeToDelete.right === null) {
      if (nodeToDelete.parent === null) {
        this.root = null
      } else {
        if (nodeToDelete.parent.left === nodeToDelete) {
          nodeToDelete.parent.left = null
        } else {
          nodeToDelete.parent.right = null
        }
      }
      return
    }

    // CLRS Way
    if (nodeToDelete.left === null) {
      this.transplant(nodeToDelete, nodeToDelete.right)
    } else if (nodeToDelete.right === null) {
      this.transplant(nodeToDelete, nodeToDelete.left)
    } else if (nodeToDelete.right && nodeToDelete.left) {

      // find z's successor y
      const nodeMinimum = this.treeSuccessor(nodeToDelete)

      if (nodeMinimum !== nodeToDelete.right) {
        this.transplant(nodeMinimum, nodeMinimum.right)
        nodeMinimum.right = nodeToDelete.right
        nodeMinimum.right.parent = nodeMinimum
      }

      this.transplant(nodeToDelete, nodeMinimum)
      nodeMinimum.left = nodeToDelete.left
      nodeMinimum.left.parent = nodeMinimum
    }
  }

  isEmpty(): boolean {
    return this.root === null ? true : false
  }

  search(key: number): [number, T] | null {
    const node = this.treeSearchRecursive(this.root, key)
    return node === null ? null : [node.key, node.data]
  }

  insert(key: number, data: T): void {

    if (key < 0) throw Error('Keys must be Postive')

    const insertNode = { key, data, parent: null, left: null, right: null }
    let compareNode = this.root
    let trailingParentNode = null

    while (compareNode !== null) {
      trailingParentNode = compareNode

      if (insertNode.key === compareNode.key) {
        trailingParentNode.data = data
        return
      } else if (insertNode.key < compareNode.key) {
        compareNode = compareNode.left
      } else {
        compareNode = compareNode.right
      }
    }

    insertNode.parent = trailingParentNode

    if (trailingParentNode === null) {
      this.root = insertNode
      return
    }

    if (insertNode.key < trailingParentNode.key) {
      trailingParentNode.left = insertNode
    } else {
      trailingParentNode.right = insertNode
    }
  }

  walk(): number[] {
    return this.traverseInorder(this.root, []);
  }

  getMin(): [number, T] {
    if (this.isEmpty()) return null
    const node = this.treeMinimum(this.root)
    return [node.key, node.data]
  }

  getMax(): [number, T] {
    if (this.isEmpty()) return null
    const node = this.treeMaximum(this.root)
    return [node.key, node.data]
  }

  getSuccessor(key: number): [number, T] | null {
    const searchNode = this.treeSearchRecursive(this.root, key)

    if (searchNode) {
      const node = this.treeSuccessor(searchNode)
      return node === null ? null : [node.key, node.data]
    } else {
      return null
    }
  }
}
