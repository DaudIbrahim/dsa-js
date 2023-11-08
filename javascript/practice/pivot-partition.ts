const pivotPartition = (arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1): number => {
    const pivotIdx = endIdx
    const pivotElement = arr[pivotIdx]

    let windowStartIdx: number = -1
    let windowSize = 0

    // < pivot <=

    // bug
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

            // bug - zero index - if fails
            if (windowStartIdx >= 0) {
                windowSize += 1
            } else {

                windowStartIdx = i
            }
        }

    }

    // final swap
    // bug - zero index - if fails
    if (windowStartIdx >= 0) {
        const temp = arr[windowStartIdx]
        arr[windowStartIdx] = arr[pivotIdx]
        arr[pivotIdx] = temp

        return windowStartIdx
    }

    return pivotIdx
}

// const arr = [2, 15, 13, 4, 7, 68, 1]
const arr = [2, 1]
pivotPartition(arr)
console.log(arr)
