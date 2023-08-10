/**
 * Please use Pen-Paper to translate abstraction into concrete
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    /**
     * O (Log N)
     * Index: Offset by One
     * Check the middle element
     * low & high
     */
    let low = 0
    let high = haystack.length

    do {
        /**
         * const mid = Math.floor((low + (high)) / 2)
         * mid = (2 + 3) / 2
         * mid = 5 / 2
         */

        /**
         * ThePrimeagen method of mid
         * const mid = low + Math.floor((high - low) / 2)
         * mid = 2 + (3-2) / 2
         * mid = 2 + 1/2
         * mid = 5 / 2
         * 
         * Memorize ThePrimeagen method of finding the mid point &
         * Memorize inclusive/exclusive [low, hight) range(0, 5)
         * 
         * Bothe mids are equal in their result.equation. In ThePrimeagen method low + Math.floor((high - low) / 2) `low as offset`
         * Learn ThePrimeagen's mid method, this way you will remember about the offset
         * Good memory hook for Offset by one, where highest is exclusive and midpoint uses low as an offset as well
         * Additionally note AWS for pagination includes offet, MySQL in its query for pagination makes use of  OFFSET
         *
         */

        const mid = low + Math.floor((high - low) / 2)
        const val = haystack[mid]

        if (needle === haystack[mid]) {
            return true
        } else if (val > needle) {
            high = mid
        } else if (val < needle) {
            low = mid + 1
        }

    } while (low < high);

    /**
     * Base Case - Stop the Loop
     * Base Case - Stop the Loop
     */

    return false
}