/**
 * 14-Nov-23 2:39:40 AM
 *
 * Base Cases
 * 1. Off the Map Out of Index
 * 2. Hit wall
 * 3. Seen
 * 4. End. Break out for Recursion when found 🚩 (end tile). You no longer need to continue the recursion.
 */
const exploreMaze = (maze: string[], wall: string, start: Point, end: Point, seenArray: boolean[][], resultArray: Point[]): boolean => {

    // out of bounds
    // if (maze[start.y] === undefined || maze[start.y][start.x] === undefined) {
    //     return false
    // }

    // Base Case - Off the map
    if ((start.y < 0 || start.y >= maze.length) || (start.x < 0 || start.x >= maze[0].length)) {
        return false
    }

    // seen
    if (seenArray[start.y][start.x] === true) {
        return false
    }

    // Pre Action - Doing some thing before the recursion call
    const { y, x } = start
    seenArray[y][x] = true
    resultArray.push(start)

    // wall
    if (maze[y][x] === wall) {
        // post. hit a base case done with recursion. performing an action before we return. (may not be the best of explaination)
        resultArray.pop()
        return false
    }

    // found
    if ((y === end.y) && (x === end.x)) {
        return true
    }

    const topRightBottomLeftArryIndices: Point[] = [
        { y: start.y - 1, x: start.x },
        { y: start.y, x: start.x + 1 },
        { y: start.y + 1, x: start.x },
        { y: start.y, x: start.x - 1 }
    ]

    for (let i = 0; i < topRightBottomLeftArryIndices.length; i++) {
        // Recursion Action - The Recursion call
        const isFound = exploreMaze(maze, wall, topRightBottomLeftArryIndices[i], end, seenArray, resultArray)
        if (isFound === true) return true
    }

    // Post Action - After The recursion call
    resultArray.pop()
    return false
}

export default function maze_solver(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const seenArray: boolean[][] = []
    const resultArray: Point[] = []

    for (let i = 0; i < maze.length; i++) {
        const arr = []
        for (let j = 0; j < maze[i].length; j++) arr.push(false)
        seenArray.push(arr)
    }

    exploreMaze(maze, wall, start, end, seenArray, resultArray)
    return resultArray
}
