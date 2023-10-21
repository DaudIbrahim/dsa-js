
/**
 * Simplest of sort. A basic bubble sort
 * Bubble Sort - is a sort in place Algorithm
 * Big O -> (n * (n + 1)) / 2 -> n to the power of 2
 * 
 * this implementation: ascending
 */
export default function bubble_sort(arr: number[]): void {

    /**
     * Memorize for loop sequence
     * 1. check condition for i truthy/false
     * 2. run the body of the loop
     * 3. increment i
     */

    for (let i = 0; i < arr.length; i++) {

        for (let j = (i + 1); j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }

    }
}
