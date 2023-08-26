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
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
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
export function my_implementation_bfs(head: BinaryNode<number>, needle: number): boolean {
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