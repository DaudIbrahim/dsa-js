/**
 * Level-Order Traversal in Trees vs. BFS in General Graphs
 *
 * In the context of tree traversal, specifically level-order traversal, it's notable
 * that we don't need to use a "seen" array or object to prevent revisiting nodes.
 * This is due to the inherent acyclic nature of trees.
 *
 * - Trees are Acyclic:
 *   In a tree, there exists exactly one path between any two nodes, and cycles are
 *   inherently absent. As a result, during level-order traversal in a tree, each node
 *   is visited and enqueued only once. There is no possibility of revisiting a node,
 *   eliminating the need for a "seen" array to manage traversal.
 *
 * Contrastingly,
 *
 * - BFS in General Graphs:
 *   When applying breadth-first search (BFS) to a general graph, cycles are possible,
 *   and nodes can be reachable through multiple paths. To prevent infinite loops and
 *   redundant visits, it's common to employ a "seen" data structure (e.g., a set or
 *   an array) to keep track of visited nodes.
 *
 * Conclusion:
 * While level-order traversal leverages the tree's acyclic nature to ensure
 * efficient and correct traversal, BFS in general graphs requires additional
 * mechanisms to manage traversal in the presence of cycles.
 */


/**
 * BFS traverses the tree by level and can also be called level order traversal
 * Stack - DFS - LIFO - ⬇
 * Queue - BFS - FIFO - ➡
 * In this implementation of a breadth first search on a Binaray Tree
 * We will use a queue and iteratively find the key in each level. (Example level 1, level 2, ...)
 */
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    if (head === null) return false

    const queue: BinaryNode<number>[] = [head]

    do {
        const node = dequeue(queue)

        if (node) {
            if (node.value === needle) return true
            enqueue(node.left, queue)
            enqueue(node.right, queue)
        }

    } while (queue.length);

    return false
}

const enqueue = (node: null | BinaryNode<number>, queue: BinaryNode<number>[]) => {
    if (node !== null) queue.push(node)
}

const dequeue = (queue: BinaryNode<number>[]) => {
    return queue.shift()
}

