/**
 * Please use a pen and paper to understand the abstract
 * Not possible to write down every case in here
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
         */

        // [ ] - Please learn how to find middle element | Learn one and learn it well
        // Bothe mids are equal in ThePrimeagen method low + (works as a offset)
        // Good memory hook for Offset by one, where highest is exclusive and midpoint uses low as an offset as well


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