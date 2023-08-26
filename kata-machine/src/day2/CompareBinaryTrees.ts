export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    /**
     * Making use of Depth-First to solve this problem
     * Using Depth First Search because DFS preserves the shape of the traversal
     * Write it down with pencil & paper and compare DFS with BFS and you would find out that DFS maintains shape whereas BFS does not
     *
     * Since we are comparing two binray trees, lets traverse in Depth First in POST Order Traversl
     */
    return my_implementation_walk_and_compare(a, b)
}

const my_implementation_walk_and_compare = (a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean => {

    // #0
    if (!!a !== !!b) return false

    // #1
    if (a === null && b === null) return true

    // #2
    if (a !== null && b !== null) {
        if (a.value !== b.value) return false
        if (my_implementation_walk_and_compare(a.left, b.left) === false) return false
        if (my_implementation_walk_and_compare(a.right, b.right) === false) return false
    }

    return true
}