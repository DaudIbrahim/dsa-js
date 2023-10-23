type Node<T> = {
    value: T,
    next?: Node<T>,
}

/**
 * Stack
 * 23-Oct-23
 * Stack - DFS - LIFO - ⬇
 * LIFO - Last In - First Out
 * Stack is vertical. Example: Lay's Stax
 *
 * Our implementation deals with the head
 *
 * pop()->HEAD
 *     . .
 * push()->HEAD
 *
 */

export default class Stack<T> {
    public length: number;
    private head: undefined | Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    private _createNode(value: T, next?: Node<T>): Node<T> {
        return { value, next }
    }

    private _isEmpty(): boolean {
        return (this.head === undefined)
    }

    private _hasExactlyOneNode(): boolean {
        if (this._isEmpty()) {
            return false
        } else if (this.head && this.head.next) {
            return false
        } else {
            return true
        }
    }

    push(item: T): void {
        this.length += 1
        const node = this._createNode(item)

        if (this._isEmpty()) {
            this.head = node
        } else {
            const previousHead = this.head
            node.next = previousHead
            this.head = node
        }
    }

    pop(): T | undefined {

        if (this._isEmpty()) {
            return undefined
        }

        if (this._hasExactlyOneNode()) {
            this.length -= 1
            const node = this.head
            this.head = undefined
            return node?.value
        } else {
            this.length -= 1
            const node = this.head
            this.head = node?.next
            return node?.value
        }
    }

    peek(): T | undefined {
        return this._isEmpty() ? undefined : this.head?.value
    }
}
