{
    /** Linear Search */
    const linear_search = (haystack: number[], needle: number): boolean => {

        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) return true
        }

        return false
    }
}

{
    /**
     * Binary Search
     * Remmber: the data needs to be sorted
     *
     * Half-open Interval
     * [a, b) - a is included & b is not, b is excluded from the interval
     * [low, high) - low is included & high is not
     *
     * for i in range(0, 5):
     *
     */
    const binary_search = (haystack: number[], needle: number): boolean => {

        let low = 0
        let high = haystack.length

        while (low < high) {
            const mid = Math.floor(low + ((high - low) / 2))
            const val = haystack[mid]

            if (val === needle) {
                return true
            } else if (val < needle) {
                low = mid + 1
            } else {
                high = mid
            }
        }

        return false
    }

    const foo = [15, 25, 65]
    binary_search(foo, 65)
}

{
    /**
     * Bubble Sort
     * Big of n to the power of 2
     * (n * (n + 1)) / 2
     */
    const bubble_sort = (arr: number[],): void => {
        for (let j = arr.length; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (arr[i] > arr[i + 1]) {
                    const temp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp
                }
            }
        }
    }

    const arr = [9, 3, 7, 4, 69, 420, 42]
    bubble_sort(arr)
}

{
    /**
     * Retain: Queue Mental Model (Linked List)
     * Think of a real life Queue | Think of Queue in System Design
     * The first person to be served is at the front of Queue that is the -> HEAD
     * The last person is to be served last at the end of Queue that is the -> TAIL
     * 
     * FIFO - First In - First Out
     * 
     * Alternatively visualize Queues diargarm in System Design (FIFO)
     * enqueue()->TAIL . . . . . . . . . . . deque()->HEAD->
     * 
     * Lesson here is to remember what the next actually points to
     */
    type Node<T> = {
        value: T,
        next?: Node<T>,
    }

    class Queue<T> {
        public length: number;
        private head?: Node<T>;
        private tail?: Node<T>;

        constructor() {
            this.length = 0
            this.head = this.tail = undefined
        }

        enqueue(item: T): void {
            this.length++
            const node = { value: item, next: undefined }

            // Case: Empty list
            if (this.head === undefined && this.tail === undefined) {
                this.head = this.tail = node
                return
            }

            // Case: Non-Empty list
            if (this.tail !== undefined) {
                this.tail.next = node
                this.tail = node
            }
        }

        deque(): T | undefined {
            // Case: Empty list
            if (this.head === undefined && this.tail === undefined) return

            this.length--
            const current = this.head

            // Caase: List with one element
            if (this.head === this.tail) {
                this.head = this.tail = undefined
            } else {
                // Case: List with more than one element
                this.head = current?.next
            }

            return current?.value
        }

        peek(): T | undefined {
            return this.head ? this.head.value : undefined
        }

        printFromStartToFinish(): void {
            let current = this.head
            while (current !== undefined) {
                console.log(current.value)
                current = current.next
            }
        }
    }

    const list = new Queue<number>()

    list.enqueue(5)
    list.enqueue(7)
    list.enqueue(9)
    list.printFromStartToFinish()
}