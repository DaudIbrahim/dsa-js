/**
 * Multiple Pointers by Colt Stelee
 * Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
 */
function countUniqueValues(arr = []) {
    if (arr.length === 0) return 0

    let i = 0
    let j = 1

    // Actively avoiding the nested loop
    for (; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }

    return i + 1
}

// Results
// console.log(
//     countUniqueValues([1, 1, 1, 1, 1, 2]),
//     countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
//     countUniqueValues([]),
//     countUniqueValues([-2, -1, -1, 0, 1]),
// );

function makeSquares(arr) {
    // Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

    if (arr.length === 0) return []

    const val = []
    let left = 0
    let right = arr.length - 1

    console.log(left, right)

    while (left <= right) {
        if(left === right) {
            val.unshift(arr[left] * arr[left])
            left += 1
            right -= 1
            continue
        }
        const leftVal = arr[left] * arr[left]
        const rightVal = arr[right] * arr[right]

        if (rightVal > leftVal) {
            val.unshift(rightVal)
            val.unshift(leftVal)
        } else {
            val.unshift(rightVal)
            val.unshift(leftVal)
        }

        //
        left += 1
        right -= 1
    }

    return val
}

// Results
console.log(
    makeSquares([-2, -1, 0, 2, 3]), // [0, 1, 4, 4, 9]
    // makeSquares([-3, -1, 0, 1, 2]), // [0, 1, 1, 4, 9]
)