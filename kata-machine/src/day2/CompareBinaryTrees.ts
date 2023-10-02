export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return walk_and_compare(a, b)
}

const walk_and_compare = (a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean => {

    // #0
    if (a === null && b === null) return true

    // #1 This solution checks logically step by step of all the base cases
    // Either has to be null both cannot be null we have checked before hand
    // Refer: Make use of both And-Or just like True-False
    if (a === null || b === null) return false

    // #2
    if (a.value !== b.value) return false

    return walk_and_compare(a.left, b.left) && walk_and_compare(a.right, b.right)
}


/**
 * Making use of Depth-First to solve this problem
 * Using Depth First Search because DFS preserves the shape of the traversal
 * Write it down with pencil & paper and compare DFS with BFS and you would find out that DFS maintains shape whereas BFS does not
 *
 * Since we are comparing two binray trees, lets traverse in Depth First in POST Order Traversl
 *
 * Also you solved this problem on Friday after Salah on pen and paper
 *
 * Refer: Think First Code Second
 * - Adopted the mindset of *Think First; Code Second*
 * - Translated Abstraction into Concreteness
 * 
 * Refer: Truth Tables
 * A    |   B
 * null |   value
 * value |   null
 * null |   null
 * value    | null
 */
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