/**
 * My Approach
 * 12-Nov-23 3:50:51 AM
 */
const pivotPartition = (arr: number[], startIdx: number = 0, endIdx: number = arr.length - 1): number => {
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

    // Final Swap
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

const myArray = [5, 0, 1, 7, 2, 13]
pivotPartition(myArray)
console.log(myArray)
