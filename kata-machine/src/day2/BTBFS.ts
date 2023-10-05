// BTBFS - Binary Tree, Breadth First Search.
// Observe in a tree how you did not have maintain a seen[], as trees are acyclic; you continue traversing down a tree.

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    /**
     * Queue
     *  - Enqueue left & rigt node
     *  - Dequeue current node
     */
    const queue: [BinaryNode<number>] = [head]
    let isFound = false

    do {
        const current = queue.shift()

        if (current?.value === needle) {
            isFound = true
            break
        }

        if (current?.left) queue.unshift(current.left)
        if (current?.right) queue.unshift(current.right)

    } while (queue.length);

    return isFound
}
