const directionArray = [
    // [y, x]
    [-1, 0], // top
    [0, +1], // right
    [+1, 0], // bottom
    [0, -1], // right
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], resultPath: Point[]): boolean {
    /**
     * Cover The Base Cases
     * 1. Hit a wall
     * 2. Off the map
     * 3. Have seen it
     * 4. Found the End
     */

    // y is the column & x is the row of your 2D Array
    const { y, x } = curr

    // Base Case - Off the map
    if ((y < 0 || y >= maze.length) || (x < 0 || x >= maze[0].length)) {
        return false
    }

    // Base Case - Hit a Wall
    if (maze[y][x] === wall) {
        return false
    }

    // Base Case - Have seen it
    if (seen[y][x]) {
        return false
    }

    // Base Case - Found the End
    if (y === end.y && x === end.x) {
        resultPath.push({ y, x })
        return true
    }

    /** 3 Recurse Operations */

    // Pre Operation - Doing some operation before recursion
    seen[y][x] = true
    resultPath.push({ y, x })

    for (let i = 0; i < directionArray.length; i++) {
        const cp = { y: curr.y + directionArray[i][0], x: curr.x + directionArray[i][1] }

        // Recursion Operation - The recursion call
        const haveFoundTheEnd = walk(maze, wall, cp, end, seen, resultPath)

        /**
         * Memorize
         * Break out of for Recursion 🚩 when I have found true
         * you cannot just keep on recursion once you found the end
         */
        if (haveFoundTheEnd) {
            return true
            // & now the functions begin to return to their return address with return value of true
            // when its false: it returns to the return address with return value of false - In a way implementing a kind of undo
        }
    }

    // Post - After the recursion call
    resultPath.pop()

    return false
}

export default function maze_solver(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const resultPath: Point[] = []
    const seen: boolean[][] = []

    // Fill Seen
    for (let i = 0; i < maze.length; i++) {
        seen.push([])
        for (let j = 0; j < maze[i].length; j++) { seen[i].push(false) }
    }

    walk(maze, wall, start, end, seen, resultPath)
    return resultPath
}
