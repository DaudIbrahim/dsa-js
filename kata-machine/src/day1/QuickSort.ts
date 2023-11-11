/**
 * Transform [5, 1, 10, 3, 7] into [< Pivot <=]
 *
 * 1. **Approach 1 (Your First Approach):**
 * - It uses two pointers, `i` and `countIdx`, to track elements.
 * - It swaps elements to partition them based on the pivot.
 * - It's efficient and straightforward but may require careful tracking of pointers.
 * 
 * In Approach 1, the pivot element remains the same throughout the partitioning process.
 * The pivot element is chosen as the last element in the subarray, and it doesn't change during the partitioning.
 */
const pivotPartition = (arr: number[], startIdx: number, endIdx: number): number => {
    let i = startIdx + 1

    /**
     * Memorize the importance of `offset`
     * `offset` in Quick Sort to account for the left partition for example 0 to mid and right partition mid to end
     * You made a mistake here for not accounting for offset in countIdx
     *
     * Refer `offset` : the countIdx must include the offset
     */
    let countIdx = startIdx

    for (; i <= endIdx; i++) {
        if (arr[startIdx] > arr[i]) {
            countIdx += 1
            if (i > countIdx) {
                const temp = arr[i]
                arr[i] = arr[countIdx]
                arr[countIdx] = temp
            }
        }
    }

    if (countIdx > startIdx) {
        const temp = arr[countIdx]
        arr[countIdx] = arr[startIdx]
        arr[startIdx] = temp
    }

    return countIdx
}

const quick_sort_recurse = (arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1): void => {

    const pivotIdx: number = pivotPartition(arr, startIdx, endIdx)

    // Left side of the partition
    if (pivotIdx > startIdx) {
        quick_sort_recurse(arr, startIdx, pivotIdx - 1)
    }

    // Right side of the partition
    if (pivotIdx < endIdx) {
        quick_sort_recurse(arr, pivotIdx + 1, arr.length - 1)
    }

    // Refer `return` : use explicit return for better readibility
    return
}

export default function quick_sort(arr: number[]): void {
    quick_sort_recurse(arr)
}


// const arr = [7, 1, 10, 13, 5]
// pivotPartition(arr, 0, arr.length - 1)
// console.log(arr) // [ 5, 1, 7, 13, 10 ]
