const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {

    // Base Case & return to address with value path number[]
    if (curr === null) return path

    // pre
    path.push(curr.value)

    // recurse
    walk(curr.left, path)
    walk(curr.right, path)

    // post & return to address with value path number[]
    return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}