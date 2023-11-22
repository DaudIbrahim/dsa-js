/**
 * Post Order Traversal is depth first traversal
 * CLRS: A postorder tree walk prints the root after the values in its subtrees
 */
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk_post_order_recursive(head, [])
}

const walk_post_order_recursive = (node: null | BinaryNode<number>, resultPath: number[]) => {
    if (node === null) return resultPath
    walk_post_order_recursive(node.left, resultPath)
    walk_post_order_recursive(node.right, resultPath)
    resultPath.push(node.value)
    return resultPath
}
