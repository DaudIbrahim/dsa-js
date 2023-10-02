/**
 * Sliding Window
 * In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the contiguous subarrays (or sublists) of a given size.
 */
function findAvgOfSubarraysMySolution(arr, K) {
    const results = []
    let sum = 0

    for (let idx = 0; idx < K; idx++) {
        sum += arr[idx]
    }

    results.push((sum / K))

    // Actively avoiding the nested loop
    let i = 1
    let j = K
    for (; i < arr.length - K + 1; i++, j++) {
        sum -= arr[i - 1]
        sum += arr[j]
        results.push((sum / K))
    }

    return results
}

// [2.2, 2.8, 2.4, 3.6, 2.8]
console.log(findAvgOfSubarraysMySolution([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
