// WeightedAdjacencyMatrix are 2D Arrays

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    // [] -> enqueue, dequeue
    const queue: number[] = [source]

    // [idx0, idx1, idx2]
    // [val2, val0, val1]
    const previous = new Array(graph.length).fill(false);

    // [idx0, idx1, idx2]
    // [true, false, true]
    const seen = new Array(graph.length).fill(false);

    // use seen, push value & revers in the end for correct order
    const result: number[] = []

    do {
        const val = queue.shift()

        if (val !== undefined && seen[val] === false) {

            if (val === needle) {
                result.push(val)
                break
            }

            for (let idx = 0; idx < graph.length; idx++) {

                // No need to compare the node with itself
                if (val === idx) continue

                if (graph[val][idx] >= 1 && seen[idx] === false) {
                    queue.unshift(idx)
                    previous[idx] = val
                }
            }

            seen[val] = true
        }

    } while (queue.length);

    if (result.length === 0) {
        return null
    }

    // Generate previous, build it backwards
    let num = result[0]

    // While it has a previous node
    while (previous[num]) {
        num = previous[num]
        result.push(num)
    }

    // Add the source.
    // Source does not have a previous val thus it will neither the enter the while loop above nor push to the result
    result.push(source)

    // Reverse the result is in correct order
    // With out reverse, result [xyz, source]
    // With reverse, result [source, xyz]
    return result.reverse()
}
