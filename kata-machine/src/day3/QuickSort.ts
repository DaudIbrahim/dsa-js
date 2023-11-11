/**
 * Quick Sort - implementation of quicksort using the Lomuto partition scheme
 *
 * Pivot Partition - Lomuto Partition Scheme - Window
 * Pivot Partition - Hoare Partition Scheme - Two Pointers
 *
 * 12-Nov-23 4:16:04 AM
 */
export default function quick_sort(arr: number[]): void {
    return quick_sort_recursive(arr, 0, arr.length - 1)
}

const quick_sort_recursive = (arr: number[], startIdx: number, endIdx: number) => {

    // our base case in an array with single element
    // if true, the function returns, effectively stopping the recursion.
    if (startIdx >= endIdx) return

    // pivot partition
    const pivotIdx = pivot_partition_lomuto(arr, startIdx, endIdx)

    // recursive call
    quick_sort_recursive(arr, startIdx, (pivotIdx - 1))
    quick_sort_recursive(arr, (pivotIdx + 1), endIdx)
}

const pivot_partition_lomuto = (arr: number[], startIdx: number, endIdx: number): number => {
    let pivotIdx = startIdx
    const pivotElement = arr[pivotIdx]

    // < pivot <=
    let lessThanIdx: null | number = null
    let greaterThanOrEqualsIdx: null | number = null

    for (let index = startIdx + 1; index < arr.length; index++) {
        const element = arr[index];

        if ((pivotElement < element) === false) {
            lessThanIdx = index

            // do the swapping. swap element and point index to their correct position
            if (greaterThanOrEqualsIdx) {
                const temp = arr[greaterThanOrEqualsIdx]
                arr[greaterThanOrEqualsIdx] = arr[lessThanIdx]
                arr[lessThanIdx] = temp

                const tempIdx = greaterThanOrEqualsIdx
                greaterThanOrEqualsIdx = lessThanIdx
                lessThanIdx = tempIdx
            }

        } else {
            greaterThanOrEqualsIdx = index
        }

    }

    // final swap
    if (lessThanIdx !== null) {
        const temp = arr[lessThanIdx]
        arr[lessThanIdx] = arr[pivotIdx]
        arr[pivotIdx] = temp

        const tempIdx = lessThanIdx
        pivotIdx = lessThanIdx
        lessThanIdx = tempIdx

        return lessThanIdx
    } else {
        return pivotIdx
    }
}