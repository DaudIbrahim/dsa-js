/**
 * The Paradigm of Divide and Conquer
 * Multiple Pointers
 *
 * Approach: Exclusive High Index
 * *Establish the mental model of having your index off by 1's | inclusive/exclusive [low, high) range[0, 5)*
 *
 * ```py
 *  for i in range(0, 5):
 *      print(i) # 0, 1, 2, 3, 4
 * ```
 *
 * The benefit of exclusive high index in our approach is the Base Case
 * We hit the Base Case aka exit out of the loop as soon as
 * both pointers low and high meet at the same index we hit the Base Case and return
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    let lowIdx = 0
    let highIdx = haystack.length
    let midIdx = getMidIndex(lowIdx, highIdx)

    while (lowIdx < highIdx) {
        if (needle === haystack[midIdx]) {
            return true
        } else if (needle > haystack[midIdx]) {
            lowIdx = midIdx + 1
            midIdx = getMidIndex(lowIdx, highIdx)
        } else {
            highIdx = midIdx
            midIdx = getMidIndex(lowIdx, highIdx)
        }
    }

    return false
}

/**
 * Refer - in implementing LRU learnt the importance of writing helper/utility functions. Helps with abstraction & encapsulation
 * Using ThePrimeagen's mid method, easy to remember about offsets
 * Just in case you forgot I calculated and found for both odd and even - inclusive and exclusive end indexes return the correct result
 */
const getMidIndex = (startIdx: number, endIdx: number) => {
    return Math.floor(
        startIdx + ((endIdx - startIdx) / 2)
    )
}