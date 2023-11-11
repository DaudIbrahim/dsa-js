/**
 * Bugs - 07-Nov-23 - Resolved - 08-Nov-23
 * - 1. for loop auto helper with i = 0 & i < arr.lenght | Read code with as much as you write it
 * - 2. wrong base condition for recursive helper
 * - 3. for index out of range use a number: negative one instead of different type. &  Zero being a valid index but falsy in IF condition
 */

export default function quick_sort(arr: number[]): void {
    quick_sort_recursive(arr, 0, arr.length - 1);
}

const quick_sort_recursive = (arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1) => {

    if (startIdx >= endIdx) return

    const pivotIdx = pivotPartition(arr, startIdx, endIdx)

    // Left side of the partition
    quick_sort_recursive(arr, startIdx, pivotIdx - 1)

    // Right side of the partition
    quick_sort_recursive(arr, pivotIdx + 1, endIdx)
}

/**
 * 2. **Approach 2 (Your Second Approach):**
 * - It uses a "window" concept with `windowStartIdx` and `windowSize`.
 * - It keeps track of elements less than the pivot within the window.
 * - It's a bit more complex but may provide some optimization in specific scenarios.
 * 
 * In Approach 2, the pivot element can change its position within the array. It starts as the last element, but as elements are rearranged during the partitioning process, the pivot element may not be at its original position. The important thing is that after the partitioning, it's in its correct sorted position relative to the smaller and larger elements.
 */
const pivotPartition = (arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1): number => {
    const pivotIdx = endIdx
    const pivotElement = arr[pivotIdx]

    /**
     * Lessons Learnt - for index out of range use a number: negative one instead of different type.
     * & secondly remember Zero is a valid index but falsy in IF condition
     */
    let windowStartIdx = -1
    let windowSize = 0

    // < pivot <=
    for (let i = startIdx; i <= endIdx; i++) {

        const element = arr[i];

        if (element < pivotElement) {

            if (windowStartIdx >= 0) {

                const temp = arr[windowStartIdx]
                arr[windowStartIdx] = element
                arr[i] = temp
                windowStartIdx += 1
            }

        } else {

            // (element >= pivotElement)

            if (windowStartIdx >= 0) {
                windowSize += 1
            } else {
                windowStartIdx = i
            }
        }
    }

    // final swap
    if (windowStartIdx >= 0) {
        const temp = arr[windowStartIdx]
        arr[windowStartIdx] = arr[pivotIdx]
        arr[pivotIdx] = temp

        return windowStartIdx
    }

    return pivotIdx
}

// const arr = [7, 1, 10, 13, 5]
// pivotPartition(arr, 0, arr.length - 1)
// console.log(arr) // [ 1, 5, 10, 13, 7 ]
