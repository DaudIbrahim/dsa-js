type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

/**
 * I made three mistakes:
 * - in _getCurrentNodeAtIndex mistake in loop termination logic (i < nowCorrected)
 * - changing length before _getCurrentNodeAtIndex
 * - removeAt - not taking into account the head node | `Refer` Take into careful consideration the head & tail nodes
 * You did not learn entirely from the resource and skipped using a tail in your DoublyLinkedList
 */

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    private _getCurrentNodeAtIndex(idx: number): Node<T> {
        if (this.length === 0) throw new Error("Oh No")
        if (idx < 0 || idx > (this.length - 1)) throw new Error("Oh No")

        /**
         * Memorize: Using indxes to loop Doubly Linked List:
         * I want to access element at index
         * Initial: if conditions is true ? (Run Loop, Increment, Check Condition) : No Loop
         * 
         * Example to access idx 0 - loop never runs and returns the head
         * 
         * Example to access idx 1
         * - Run Loop: current points to the next node
         * - Increment i, now i = 1
         * - Condition is false i < idx : 1 < 1
         * The ordering is important to remember
         * - at the end as the loop terminates i is at 1, 
         * - and our node points to next of head node that is at index 1 in this example
         */
        let i = 0
        let curr = this.head
        for (; curr && i < idx; i++) {
            curr = curr.next
        }

        // [ ] - TS learn more what is as & difference between as and colon :
        return curr as Node<T>
    }

    constructor() {
        this.length = 0
        this.head = undefined
    }

    prepend(item: T): void {
        /**
         * Insert at the start of the list at index - 0
         */
        this.length++
        const node = { value: item, next: undefined, prev: undefined } as Node<T>

        if (this.head === undefined) {
            this.head = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }

    append(item: T): void {
        /**
         * Insert at the end of the list at (this.length - 1)
         */
        if (this.length === 0) {
            this.prepend(item)
            return
        }

        const currentNodeAtIdx = this._getCurrentNodeAtIndex(this.length - 1)
        this.length++

        /**
         * Memorize a simple trick when appending to a DoublyLinkedList
         * First: Attach the new node links
         * Second: Break the old links
         */

        // First: Attach the new node links
        const node = { value: item, next: undefined, prev: currentNodeAtIdx }

        // Second: Break the old links
        currentNodeAtIdx.next = node
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Oh No")
        } else if (idx === 0) {
            this.prepend(item)
            return
        } else if (idx === this.length) {
            this.append(item)
            return
        }

        const currentNodeAtIdx = this._getCurrentNodeAtIndex(idx)
        this.length++

        // First: Attach the new node links
        const node = { value: item, next: currentNodeAtIdx?.next, prev: currentNodeAtIdx?.prev } as Node<T>

        // Second: Break the old links
        if (currentNodeAtIdx.prev) currentNodeAtIdx.prev.next = node
        if (currentNodeAtIdx.next) currentNodeAtIdx.next.prev = node
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > (this.length - 1)) throw new Error("Oh No")

        if (this.length === 1) {
            const curr = this.head
            this.head = undefined
            this.length--
            return curr?.value
        }

        const currentNodeAtIdx = this._getCurrentNodeAtIndex(idx)
        if (this.head === currentNodeAtIdx) this.head = currentNodeAtIdx.next ?? undefined
        this.length--

        // Break the old links
        if (currentNodeAtIdx.prev) currentNodeAtIdx.prev.next = currentNodeAtIdx.next
        if (currentNodeAtIdx.next) currentNodeAtIdx.next.prev = currentNodeAtIdx.prev
        return currentNodeAtIdx.value
    }

    remove(item: T): T | undefined {
        if (this.length === 0) return undefined

        let curr = this.head

        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break
            } else {
                curr = curr.next ?? undefined
            }
        }

        if (curr === undefined) return undefined

        // A tad bit repeat - Break the old links
        if (this.head === curr) this.head = curr.next ?? undefined
        this.length--
        if (curr.prev) curr.prev.next = curr.next
        if (curr.next) curr.next.prev = curr.prev
        return curr.value
    }

    get(idx: number): T | undefined {
        const currentNodeAtIdx = this._getCurrentNodeAtIndex(idx)
        return currentNodeAtIdx.value
    }
}