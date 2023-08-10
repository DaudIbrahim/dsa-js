const directionArray = [
    // [y, x]
    [-1, 0], // top
    [0, +1], // right
    [+1, 0], // bottom
    [0, -1], // right
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], result: Point[]): boolean {
    /**
     * Cover The Base Cases
     * 1. Hit a wall
     * 2. Off the map
     * 3. Have seen it
     * 4. Found the End
     */
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
        result.push({ y, x })
        return true
    }

    // Pre
    seen[y][x] = true
    result.push({ y, x })

    // Three Recurse Actions
    for (let i = 0; i < directionArray.length; i++) {

        // recurse - this is where you start moving from the starting point
        const cp = { y: curr.y + directionArray[i][0], x: curr.x + directionArray[i][1] }
        if (walk(maze, wall, cp, end, seen, result)) {
            // Memorize: Break out of for Loop when I have found true
            return true
        }
    }

    // post
    result.pop()

    return false
}

export default function maze_solver(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const result: Point[] = []
    const seen: boolean[][] = []

    // Fill Seen
    for (let i = 0; i < maze.length; i++) {
        seen.push([])
        for (let j = 0; j < maze[i].length; j++) { seen[i].push(false) }
    }

    walk(maze, wall, start, end, seen, result)
    return result
}

const maze = [
    "  x",
];

const result = maze_solver(maze, "x", { y: 0, x: 1 }, { y: 0, x: 0 });
console.log(result)
