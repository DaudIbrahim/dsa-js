type Node<T> = {
    value: T,
    prev: null | Node<T>,
    next: null | Node<T>,
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head: null | Node<T>
    private tail: null | Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = null
    }

    private _createNode(value: T, next: null | Node<T> = null, prev: null | Node<T> = null): Node<T> {
        return { value, next, prev }
    }

    private _incrementLength(): void {
        this.length += 1
    }

    private _decrementLength(): void {
        if (this.length > 0) {
            this.length -= 1
        }
    }

    // to check if is empty is useful when inserting node
    // _isEmpty() -> head/tail point to same node
    private _isEmpty(): boolean {
        return (this.head === null && this.tail === null)
    }

    // to check exactly for one node is useful when removing node
    // _hasExactlyOneNode() -> head/tail point to null
    private _hasExactlyOneNode(): boolean {
        return this._isEmpty() === true ? false : (this.head === this.tail)
    }

    // great example of inclusive & exclusive
    private _isValidRangeOfIndex(idx: number) {
        return (idx >= 0 && idx < this.length)
    }

    private _getNodeAtIndex(idx: number): null | Node<T> {

        if (this._isValidRangeOfIndex(idx) === false) {
            return null
        }

        // head
        if (idx === 0) {
            return this.head
        }

        // tail
        if (idx === (this.length - 1)) {
            return this.tail
        }

        let i = 0
        let node = this.head

        while (i < idx && node?.next) {
            i++
            node = node.next
        }

        return node
    }

    // Get value of a node at an index
    get(idx: number): T | undefined {
        const node = this._getNodeAtIndex(idx)
        return node ? node.value : undefined
    }

    // Prepend: To prepend means to add something at the beginning or before the existing content. Head
    prepend(item: T): void {
        const node = this._createNode(item)
        this._incrementLength()

        if (this._isEmpty()) {
            this.head = this.tail = node
        } else {
            if (this.head) this.head.prev = node
            node.next = this.head
            this.head = node
        }
    }

    // Append: To append means to add something at the end or after the existing content. Tail
    append(item: T): void {
        const node = this._createNode(item)
        this._incrementLength()

        if (this._isEmpty()) {
            this.head = this.tail = node
        } else {
            if (this.tail) this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    // Insert at an index
    insertAt(item: T, idx: number): void {

        if (this._isValidRangeOfIndex(idx) === false) {
            return
        }

        // head
        if (idx === 0) {
            return this.append(item)
        }

        // tail
        if (idx === (this.length - 1)) {
            return this.prepend(item)
        }

        /**
        * In a DoublyLinkedList we do have access link to previous node
        * As compared to SinglyLinkedList, in a DoublyLinkedList we do not need the offset index
        * Get the node at index and update next/previous pointers
        *
        * Memorize a simple approach with DoublyLinkedList. First: Attach the new node links & Second: Break the old links
        */
        const nodeAtIndex = this._getNodeAtIndex(idx)
        if (nodeAtIndex === null) throw new Error("Oh No")

        // First: Attach the new node links
        const newCreatedNode = this._createNode(item, nodeAtIndex, nodeAtIndex?.prev)

        // Second: Break the old links
        if (nodeAtIndex.prev) nodeAtIndex.prev.next = newCreatedNode
        nodeAtIndex.prev = newCreatedNode
    }

    // Remove at an index
    removeAt(idx: number): T | undefined {

        if (this._isValidRangeOfIndex(idx) === false) {
            return undefined
        }

        // has Exactly One Node
        if (this._hasExactlyOneNode()) {
            const node = this.head
            this.head = this.tail = null
            this._decrementLength()
            return node?.value
        }

        // head
        if (idx === 0 && this.head) {
            const node = this.head
            this.head = node?.next
            if (this.head) this.head.prev = null
            this._decrementLength()
            return node.value
        }

        // tail
        if (idx === (this.length - 1) && this.tail) {
            const node = this.tail
            this.tail = node?.prev
            if (this.tail) node.next = null
            this._decrementLength()
            return node.value
        }

        // at index
        const nodeAtIndex = this._getNodeAtIndex(idx)
        if (nodeAtIndex === null || nodeAtIndex?.prev === null || nodeAtIndex?.next === null) throw new Error("Oh No")

        nodeAtIndex.prev.next = nodeAtIndex.next
        nodeAtIndex.next.prev = nodeAtIndex.prev
        this._decrementLength()
        return nodeAtIndex.value
    }

    // Remove by search
    remove(item: T): T | undefined {

        // empty
        if (this._isEmpty() || !item) {
            return undefined
        }

        // head
        if (this.head && this.head.value === item) {
            return this.removeAt(0)
        }

        // tail
        if (this.tail && this.tail.value === item) {
            return this.removeAt(this.length - 1)
        }

        // itertate
        // note in here we are excluding the head and tail from the search. looping exclusive (head, tail)
        let node = (this.head && this.head.next)

        while (node?.next) {
            if (node.value === item) break
            node = node.next
        }

        if (node?.prev && node?.next) {
            node.prev.next = node.next
            node.next.prev = node.prev
            this._decrementLength()
            return node.value

        } else {
            return undefined
        }
    }
}