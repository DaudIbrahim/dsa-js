/**
 * Transform [5, 1, 10, 3, 7] into [< Pivot <=]
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
