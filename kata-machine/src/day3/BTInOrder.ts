/**
 * In Order Traversal is depth first traversal
 * In a Binary Search Tree doing an in order traversal returns the element in the ordered set
 * Prints out all the keys in a sorted order
 */
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk_in_order_recursive(head, [])
}

const walk_in_order_recursive = (node: null | BinaryNode<number>, resultPath: number[]) => {
    if (node === null) return resultPath
    walk_in_order_recursive(node.left, resultPath)
    resultPath.push(node.value)
    walk_in_order_recursive(node.right, resultPath)
    return resultPath
}
