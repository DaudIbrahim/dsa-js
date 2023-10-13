export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const graph = arr

    // Implement Dijkstra's Algorithm without using a priority queue. implement a basic version of the algorithm using a loop to find the node with the smallest tentative distance and continue traversal.
    // Update the distance accumulatively for all the neighbours
    // then move on to the next neighbour with the smallest distance

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
}