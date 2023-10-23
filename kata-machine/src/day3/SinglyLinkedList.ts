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

    private _isEmpty(): boolean {
        return (this.head === undefined && this.tail === undefined)
    }

    private _hasExactlyOneNode(): boolean {
        if (this.head && this.tail) {
            return this.head === this.tail
        } else {
            return false
        }
    }

    private _isValidRangeOfIndex(idx: number): boolean {
        return (idx >= 0 && idx < this.length)
    }

    private _createNode(value: T, next?: Node<T>): Node<T> {
        return { value, next }
    }

    private _getNodeAtIndex(idx: number): undefined | Node<T> {

        if (this._isValidRangeOfIndex(idx) === false) {
            return undefined
        }

        if (idx === 0 && this.head) {
            return this.head
        }

        if (idx === (this.length - 1) && this.tail) {
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

    get(idx: number): T | undefined {
        const node = this._getNodeAtIndex(idx)
        return node ? node.value : undefined
    }

    // Prepend: To prepend means to add something at the beginning or before the existing content. Head
    prepend(item: T): void {
        this.length += 1
        const node = this._createNode(item)

        if (this.head === undefined) {
            this.head = this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    // Append: To append means to add something at the end or after the existing content. Tail
    append(item: T): void {
        this.length += 1
        const node = this._createNode(item)

        if (this.tail === undefined) {
            this.tail = this.head = node
        } else {
            const prevTail = this.tail
            prevTail.next = node
            this.tail = node
        }
    }

    insertAt(item: T, idx: number): void {

        if (this._isValidRangeOfIndex(idx) === false) {
            return
        }

        // head
        if (idx === 0) {
            return this.prepend(item)
        }

        // tail
        if (idx === (this.length - 1)) {
            return this.append(item)
        }

        /**
         * In a SinglyLinkedList we don't have link to previous node
         * we will offset the index by one and get the node previous to the current one; & then update the pointers
         */
        const offsetNode = this._getNodeAtIndex(idx - 1)
        if (offsetNode === undefined) throw new Error("Oh No")

        this.length += 1
        const node = this._createNode(item, offsetNode.next)
        offsetNode.next = node
        return
    }

    removeAt(idx: number): T | undefined {

        if (this._isValidRangeOfIndex(idx) === false) {
            return undefined
        }

        if (this._isEmpty()) {
            return undefined
        }

        if (this._hasExactlyOneNode()) {
            this.length -= 1
            const node = this.head
            this.head = this.tail = undefined
            return node?.value
        }

        // head
        if (idx === 0) {
            this.length -= 1
            const node = this.head
            this.head = node?.next
            return node?.value
        }

        const offsetNode = this._getNodeAtIndex(idx - 1)
        if (offsetNode === undefined) throw new Error("Oh No")

        // tail
        if (idx === (this.length - 1)) {
            this.length -= 1
            const node = this.tail
            this.tail = offsetNode
            this.tail.next = undefined
            return node?.value
        } else {
            this.length -= 1
            const node = offsetNode.next
            offsetNode.next = offsetNode.next?.next
            return node?.value
        }
    }

    // Access; Search; Insertion; Deletion; | (Hook DB-ACID | ASID)
    // remove by searching for item
    remove(item: T): T | undefined {

        if (this._isEmpty()) {
            return undefined
        }

        // head
        if (item === this.head?.value) {
            return this.removeAt(0)
        }

        // tail
        if (item === this.tail?.value) {
            return this.removeAt(this.length - 1)
        }

        let offsetNode = this.head

        while (offsetNode?.next) {

            if (offsetNode.next.value === item) {
                break
            }

            offsetNode = offsetNode.next
        }

        if (offsetNode?.next) {
            this.length -= 1
            const node = offsetNode?.next
            offsetNode.next = offsetNode?.next?.next
            return node?.value
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


// ChatGPT Review

// Your updated implementation of a singly linked list looks very well-written and thorough. You've incorporated a lot of improvements, including the use of private helper methods to simplify the code and enhance readability.

// Here are some of the positive aspects of your code:

// 1. **Encapsulation:** Your code is well-encapsulated, with private helper methods that handle specific tasks, making the main methods cleaner and more understandable.

// 2. **Error Handling:** You've included error checks for cases like invalid indices and empty lists, which is important for robust code.

// 3. **Consistency:** Your code follows a consistent naming convention and coding style, making it easy to follow.

// 4. **Comments:** The comments you've added help explain the purpose and functionality of various parts of the code, making it more accessible for others (and your future self).

// 5. **Readability:** Your code is generally well-structured and easy to read, which is a crucial aspect of maintainable code.

// 6. **Full Implementation:** You've implemented all the fundamental operations typically associated with a singly linked list.

// Overall, your code appears to be a solid implementation of a singly linked list. It's clear that you've put effort into understanding the data structure and translating that understanding into a working implementation.

// If you have any specific questions, need further assistance, or would like feedback on a particular aspect of your code, please feel free to ask. Good job on your work so far!