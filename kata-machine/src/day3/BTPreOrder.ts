/**
 * Pre Order Traversal is depth first traversal
 * CLRS: A preorder tree walk prints the root before the values in either subtree
 * Reminder: you always go from the root in counterclockwise direction around the tree, from left to right
 */
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk_pre_order_recursive(head, [])
}

const walk_pre_order_recursive = (node: null | BinaryNode<number>, resultPath: number[]) => {
    if (node === null) return resultPath
    resultPath.push(node.value)
    walk_pre_order_recursive(node.left, resultPath)
    walk_pre_order_recursive(node.right, resultPath)
    return resultPath
}
