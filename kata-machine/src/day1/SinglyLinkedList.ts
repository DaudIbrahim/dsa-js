/**
 * Singly Linked List
 * A -> B -> C
 *
 */

type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head: undefined | Node<T>;
    private tail: undefined | Node<T>;

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    private _isIndexOutOfRange(idx: number): boolean {
        return (idx < 0 || idx >= this.length)
    }

    private _createNode(val: T, next?: Node<T>): Node<T> {
        return { value: val, next };
    }

    private _getCurrentNodeAtIndex(idx: number): undefined | Node<T> {

        // index out of range
        if (this._isIndexOutOfRange(idx)) {
            return undefined
        }

        // TS
        if (this.head === undefined || this.tail === undefined) return undefined

        // index: head
        if (idx === 0) return this.head

        // index: tail
        if (idx === (this.length - 1)) return this.tail

        /**
         * Memorize: understand this thing about looping with an index
         * A loop exits when it no longer matches the given condition. For example, i < 5.
         *
         * Now when the loop ends, what is the value of i?
         * - Case #1: If you start with 0, i is 5 at the exit of the loop.
         * - Case #2: If you start with 10, i is 10 at the exit of the loop.
         *
         * The value of i in the end is going to be the first value for which the given check condition is no longer true.
         * The value of i in the end is going to be the Negation of you given check condition for True
         */
        let i = 0
        let node = this.head

        while (i < idx && node.next) {
            i++
            node = node.next
        }

        return node
    }

    // Prepend: To prepend means to add something at the beginning or before the existing content. Head
    prepend(item: T): void {

        if (this.head === undefined) {
            const node = this._createNode(item)
            this.head = this.tail = node
            this.length++
            return
        }

        const node = this._createNode(item, this.head)
        this.head = node
        this.length++
    }

    // Append: To append means to add something at the end or after the existing content. Tail
    append(item: T): void {

        if (this.head === undefined) {
            const node = this._createNode(item)
            this.head = this.tail = node
            this.length++
            return
        }

        if (this.head === this.tail) {
            const node = this._createNode(item)
            this.head.next = node
            this.tail = node
            this.length++
            return
        }

        const node = this._createNode(item)
        this.tail && (this.tail.next = node)
        this.tail = node
        this.length++
    }

    get(idx: number): T | undefined {
        const response = this._getCurrentNodeAtIndex(idx)
        return response ? response.value : undefined
    }

    insertAt(item: T, idx: number): void {

        // index out of range
        if (this._isIndexOutOfRange(idx)) {
            return undefined
        }

        // index is head
        if (idx === 0) {
            this.prepend(item)
            return
        }

        // index is tail
        if (idx === (this.length - 1)) {
            this.append(item)
            return
        }

        /**
         * Interestingly in a SinglyLinkedList we don't have link to previous node
         * we will offset the index by one and get the node previous to the next node & update the links
         *
         * Insert Z at index 1
         * A -> B -> C
         * A -> Z -> B -> C
         */
        const node = this._getCurrentNodeAtIndex(idx - 1)
        if (node === undefined) return node

        const newNode = this._createNode(item, node.next)
        node.next = newNode
        this.length++
        return
    }

    removeAt(idx: number): T | undefined {

        // index out of range
        if (this._isIndexOutOfRange(idx)) {
            return undefined
        }

        // Same head/tail
        if (idx === 0 && this.head === this.tail) {
            const node = this.head
            this.head = this.tail = undefined
            this.length--
            return node?.value
        }

        const offsetNode = this._getCurrentNodeAtIndex(idx - 1)

        // node is head
        if (offsetNode === undefined) {
            const node = this.head
            this.head = node?.next
            this.length--
            return node?.value
        }

        // node is tail
        if (offsetNode.next === this.tail) {
            const node = this.tail
            this.tail = offsetNode
            this.tail.next = undefined
            this.length--
            return node?.value
        }

        // A -> B -> C
        const nodeToRemove = offsetNode.next
        this.length--
        offsetNode.next = offsetNode.next?.next
        return nodeToRemove?.value
    }

    remove(item: T): T | undefined {

        if (this.head === undefined && this.tail === undefined) return undefined

        // head
        if (item === this.head?.value) return this.removeAt(0)

        // tail
        if (item === this.tail?.value) return this.removeAt(this.length - 1)

        // Start iteration with head
        if (this.head === undefined) return undefined
        let isFound = false
        let offsetNode = this.head

        while (offsetNode?.next) {

            if (offsetNode.next.value === item) {
                isFound = true
                break
            }

            offsetNode = offsetNode.next
        }

        if (isFound) {
            // A -> B -> C
            const nodeToRemove = offsetNode.next
            this.length--
            offsetNode.next = offsetNode.next?.next
            return offsetNode.value
        } else {
            return undefined
        }
    }

    printSinglyLinkedList() {
        const arr = []
        let i = 0
        let node = this.head

        while (node) {
            arr.push(node.value)
            node = node.next
            i++
        }

        console.log(arr)
    }
}
