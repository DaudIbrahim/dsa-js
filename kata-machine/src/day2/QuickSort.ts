/**
 * Bugs - 07-Nov-23 - Resolved - 08-Nov-23
 * - 1. for loop auto helper with i = 0 & i < arr.lenght
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
