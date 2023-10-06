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

/**
 * Memorize: Breadth First Search
 * - Queue
 * - FIFO
 * - Vertically traversing nodes at each level so to speak
 * 
 * Memorize: Depth First Search
 * - Stack
 * - LIFO
 * - Horizontally traversing nodes from level start to level end
 */
export function my_implementation_bfs_1(head: BinaryNode<number>, needle: number): boolean {
    const q: [BinaryNode<number> | null] = [head]

    while (q.length) {
        const curr = q.shift()
        if (!curr) continue
        if (curr.value === needle) return true
        q.push(curr.left)
        q.push(curr.right)
    }

    return false
}

/**
 * my_implementation
 * I might have written code for breadth first traversal as seen in Reducible's YT Video
 */
export function my_implementation_bfs_0(head: BinaryNode<number>, needle: number): boolean {
    const queue: [BinaryNode<number> | null] = [head]

    while (queue.length) {
        let tmpLength = queue.length

        for (let i = 0; i < tmpLength; tmpLength--) {
            const curr = queue[i];

            if (curr === null) {
                queue.shift()
                continue
            }

            if (curr.value === needle) return true

            queue.shift()
            queue.push(curr.left)
            queue.push(curr.right)
        }
    }

    return false
}
