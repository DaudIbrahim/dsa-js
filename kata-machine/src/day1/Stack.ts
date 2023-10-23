type Node<T> = {
    value: T,
    next?: Node<T>,
}

/**
 * Memorize: Stack Mental Model (Linked List)
 *
 * LIFO - Last In - First Out
 * Stack is vertical. Example: Lay's Stax
 *
 * push()->HEAD
 *     . .
 * pop()->HEAD
 */

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    push(item: T): void {
        this.length++
        const theNewNode = { value: item, next: this.head }
        if (this.tail === undefined) (this.tail = theNewNode)
        this.head = theNewNode
    }

    pop(): T | undefined {
        if (this.length === 0) return undefined

        this.length--
        const theOldNode = this.head
        if (this.head === this.tail) this.head = this.tail = undefined
        if (this.head?.next) this.head = theOldNode?.next
        return theOldNode?.value
    }

    peek(): T | undefined {
        return this.head?.value
    }

    printFromTopToBottom(): void {
        if (this.length > 0) {

            let currentNode = this.head

            do {
                console.log(currentNode?.value)
                currentNode = currentNode?.next
            } while (currentNode !== undefined)
        }
    }
}
