const nestedLoopArrayPrintReverse = (arr = []) => {

    const tempArr = []
    const maxIdx = arr.length - 1

    for (let i = maxIdx; i >= 0; i--) {

        for (let j = maxIdx; j >= i; j--) {
            tempArr.push(arr[j])
        }

        console.log(tempArr)
        tempArr.splice(0, tempArr.length)
    }
}

const bubble_sort = (arr = []) => {
    /**
     * Bubble Sort - is a sort in place Algorithm
     * Big O -> (n * (n + 1)) / 2 -> n to the power of 2
     */

    let lastIdx = arr.length

    while (lastIdx > 1) {

        for (let i = 0; i < lastIdx; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        lastIdx -= 1
    }

    console.log('Bubble Sorted', arr)
}

nestedLoopArrayPrintReverse([1, 2, 3, 4, 5])
bubble_sort([10, 8, 9])