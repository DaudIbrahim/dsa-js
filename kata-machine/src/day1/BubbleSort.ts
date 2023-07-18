export default function bubble_sort(arr: number[]): void {
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
}