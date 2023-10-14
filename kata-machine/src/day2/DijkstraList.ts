function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity)
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    // When you call this functin it assumed that you have unvisited nodes
    let idx = -1
    let lowestDistance = Infinity

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue

        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i]
            idx = i
        }
    }

    return idx
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {

    const prev = new Array(arr.length).fill(-1)
    const seen = new Array(arr.length).fill(false)
    const dists = new Array(arr.length).fill(Infinity)
    dists[source] = 0

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists)
        seen[curr] = true

        const adjs = arr[curr]
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i]
            if (seen[edge.to]) continue

            const dist = dists[curr] + edge.weight

            if (dist < dists[edge.to]) {
                dists[edge.to] = dist
                prev[edge.to] = curr
            }
        }
    }

    const out: number[] = []
    let curr = sink

    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }

    out.push(source)
    return out.reverse()
}

export function my_implementation_dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const graph = arr

    // Implement Dijkstra's Algorithm without using a priority queue. implement a basic version of the algorithm using a loop to find the node with the smallest tentative distance and continue traversal.
    // Update the distance accumulatively for all the neighbours
    // then move on to the next neighbour with the smallest distance

    // Growing a core competency in translating abstraction into concreteness.
    // Visualizing creating your problems first on a whiteboard, and then being able to translate abstraction into concreteness

    const queue: number[] = [source]
    const seen: boolean[] = new Array(graph.length).fill(false)
    const previousNodeTrack = new Array(graph.length).fill(false)

    const distance: number[] = new Array(graph.length).fill(Number.MAX_VALUE)
    distance[source] = 0

    do {
        const current = queue.pop()

        if (current !== undefined && seen[current] === false) {

            seen[current] = true
            const currentGraph = graph[current]

            // 1. Update Distance Accumulatively
            for (let idx = 0; idx < currentGraph.length; idx++) {
                const { to, weight } = currentGraph[idx]
                const existingDistance = distance[to]
                const newDistance = distance[current] + weight

                if (newDistance < existingDistance) {
                    distance[to] = newDistance
                    previousNodeTrack[to] = current
                }
            }

            // Choose Next Node
            let nextNode: undefined | number = undefined
            let smallest = Number.MAX_VALUE
            for (let i = 0; i < distance.length; i++) {

                if (seen[i] === true) continue

                if (distance[i] <= smallest) {
                    smallest = distance[i]
                    nextNode = i
                }
            }

            if (nextNode) queue.push(nextNode)
        }

    } while (queue.length);

    const resultPath: number[] = []
    let track = sink

    if (previousNodeTrack[sink]) {

        // Backtrack
        while (previousNodeTrack[track] !== false) {
            resultPath.push(track)
            track = previousNodeTrack[track]
        }

        resultPath.push(source)
        resultPath.reverse()
    }

    return resultPath


    // ChatGPT Review

    // Your Dijkstra's algorithm implementation looks good as a basic and functional version. It follows the core logic of Dijkstra's algorithm, finding the shortest path from a source node to a sink node in a weighted graph. Here are some notes and feedback:

    // 1. **Function Signature**: The function signature is well-defined and follows good TypeScript conventions. It's clear what each parameter represents.

    // 2. **Variable Naming**: Variable names are generally clear and descriptive, which is good for code readability.

    // 3. **Queue**: You're using an array to implement the "queue" for node traversal. This works but is not the most efficient approach for large graphs. In more optimized versions of Dijkstra's algorithm, a priority queue (min-heap) is used to improve performance.

    // 4. **Initialization**: You correctly initialize the distance array with `Number.MAX_VALUE`, but it's important to ensure that the distance to the source node itself is set to 0. You've done this correctly with `distance[source] = 0`.

    // 5. **Updating Distances**: You correctly update distances accumulatively when a shorter path is found.

    // 6. **Node Selection**: You use a loop to find the next node with the smallest distance. This approach works, but as mentioned earlier, using a priority queue would be more efficient, especially for larger graphs.

    // 7. **Result Path**: The code for backtracking to find the shortest path is well-implemented. It correctly constructs the path from the source to the sink node.

    // 8. **Loop**: You're using a `do...while` loop that continues until the queue is empty. This is a valid approach for Dijkstra's algorithm.

    // Overall, your "bare-bones" Dijkstra's algorithm implementation is functional and demonstrates the basic principles of the algorithm. It's a good starting point for understanding Dijkstra's algorithm. If you need to work with larger graphs or optimize the algorithm further, you may consider using a priority queue for more efficient node selection. Additionally, you might want to add error handling and input validation for more robust code.

}