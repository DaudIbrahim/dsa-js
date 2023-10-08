/**
 * Depth First Search on a Binary Tree
 */
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle)
}

const search = (curr: BinaryNode<number> | null, needle: number): boolean => {
    if (curr === null) return false
    if (curr.value === needle) return true

    /**
     * Refer: Binary Search Tree, Binary Search, & Quick Sort share the identical idea
     * Divide & Conquer
     * Split in half
     * Go: Left || Right
     */
    // Decide whether to go right or left
    // <= (Binary | Middle | Pivot) <
    if (curr.value < needle) {
        return search(curr.right, needle)
    } else {
        return search(curr.left, needle)
    }
}
