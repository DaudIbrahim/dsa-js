// Depth First Search

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

// export const list2: WeightedAdjacencyList = [];
// list2[0] = [
//     { to: 1, weight: 3 },
//     { to: 2, weight: 1 },
// ];
// list2[1] = [
//     { to: 4, weight: 1 },
// ];
// list2[2] = [
//     { to: 3, weight: 7 },
// ];
// list2[3] = [ ];
// list2[4] = [
//     { to: 1, weight: 1 },
//     { to: 3, weight: 5 },
//     { to: 5, weight: 2 },
// ];
// list2[5] = [
//     { to: 2, weight: 18 },
//     { to: 6, weight: 1 },
// ];
// list2[6] = [
//     { to: 3, weight: 1 },
// ];

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const resultPath: number[] = [source]
    const seen = new Array(graph.length).fill(false)
    seen[source] = true

    recursiveWalkInDepth(graph, source, needle, resultPath, seen)
    return resultPath.length === 0 ? null : resultPath
}

// The recursiveWalkInDepth function is the recursive helper function that performs the DFS traversal
const recursiveWalkInDepth = (graph: WeightedAdjacencyList, current: number, needle: number, resultPath: number[], seen: boolean[]): boolean => {
    // Pre Action - Doing some thing before the recursion call
    if (current === needle) return true

    const currentGraph = graph[current]

    for (let idx = 0; idx < currentGraph.length; idx++) {
        const nextNode = currentGraph[idx];
        if (seen[nextNode.to]) continue
        seen[nextNode.to] = true
        resultPath.push(nextNode.to)

        // Recursion Action - The Recursion call
        const found =  recursiveWalkInDepth(graph, nextNode.to, needle, resultPath, seen)

        /**
         * Memorize - break out of for Recursion when found, do not keep on doing the recursion once you found the node. The search is over...
         * A mistake completely identical to maze solver problem
         * When you have found the node then there is no longer the need to traverse the rest of the neighbouring nodes
         * have found the needle then you are done with the traversal
         */
        if (found === true) return true
    }

    // Post Action - After The recursion call
    // This implementation of DFS uses recursion to explore nodes in a depth-first manner, marking them as visited and backtracking when necessary. 
    resultPath.pop()
    return false
}
