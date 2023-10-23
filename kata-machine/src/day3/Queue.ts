type Node<T> = {
    value: T,
    next?: Node<T>,
}

/**
 * Queue
 * 23-Oct-23
 * Queue - BFS - FIFO - ➡
 *
 * FIFO - First In - First Out
 * Can Visualize Queues in System Design Diagrams (FIFO)
 * enqueue()->TAIL . . . . . . . . . . . deque()->HEAD
 *
 * In our implementation we wiil enqueue/add to the tail and deque/remove from the tail
 */


export default class Queue<T> {
    public length: number;
    private head: undefined | Node<T>
    private tail: undefined | Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    private _createNode(value: T, next?: Node<T>): Node<T> {
        return { value, next }
    }

    private _isEmpty(): boolean {
        return (this.head === undefined && this.tail === undefined)
    }

    private _hasExactlyOneNode(): boolean {
        if (this._isEmpty()) {
            return false
        } else if (this.head !== this.tail) {
            return false
        } else {
            return true
        }
    }

    // enqueue by the tail
    enqueue(item: T): void {
        this.length += 1
        const node = this._createNode(item)

        if (this._isEmpty()) {
            this.head = this.tail = node
        } else if (this._hasExactlyOneNode()) {
            if (this.head) this.head.next = node
            this.tail = node
        } else {
            if (this.tail) this.tail.next = node
            this.tail = node
        }
    }

    // deque by the head
    deque(): T | undefined {

        if (this._isEmpty()) {
            return undefined
        }

        this.length -= 1
        const node = this.head

        if (this._hasExactlyOneNode()) {
            this.head = this.tail = undefined
        } else {
            this.head = node?.next
        }

        return node?.value
    }

    peek(): T | undefined {
        return this._isEmpty() ? undefined : this.head?.value
    }
}
