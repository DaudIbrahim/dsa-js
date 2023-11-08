/**
 * The following is not my implementation, rather it a reference to a different approach of performing Quick Sort
 */
export default function quick_sort(arr: number[]): void {
    quick_sort_recursive(arr, 0, arr.length - 1);
}

const quick_sort_recursive = (arr: number[], startIdx: number, endIdx: number) => {
    if (startIdx < endIdx) {
        const pivotIdx = pivotPartition(arr, startIdx, endIdx);

        quick_sort_recursive(arr, startIdx, pivotIdx - 1);
        quick_sort_recursive(arr, pivotIdx + 1, endIdx);
    }
}

const pivotPartition = (arr: number[], startIdx: number, endIdx: number): number => {
    const pivotIdx = endIdx;
    const pivotElement = arr[pivotIdx];
    let windowStartIdx = startIdx;

    for (let i = startIdx; i < endIdx; i++) {
        const element = arr[i];

        if (element < pivotElement) {
            [arr[i], arr[windowStartIdx]] = [arr[windowStartIdx], arr[i]]; // Swap arr[i] and arr[windowStartIdx]
            windowStartIdx++;
        }
    }

    [arr[windowStartIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[windowStartIdx]]; // Swap pivotElement to its correct position

    return windowStartIdx;
}

const arr = [9, 3, 7, 4, 69, 420, 42];
quick_sort(arr)
console.log(arr)
