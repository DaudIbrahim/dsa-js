type Node<T> = {
    value: T,
    next?: Node<T>,
}

/**
 * Retain: Queue Mental Model (Linked List)
 * Think of a real life Queue
 * The first person to be served is at the front of Queue that is the -> HEAD
 * The last person is to be served last at the end of Queue that is the -> TAIL
 * 
 * FIFO - First In - First Out
 * 
 * Alternatively visualize Queues diargarm in System Design (FIFO)
 * enqueue()->TAIL . . . . . . . . . . . deque()->HEAD->
 */

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        this.length++
        const theNewNode = { value: item, next: undefined }
        if (this.tail) this.tail.next = theNewNode
        if (this.head === undefined) this.head = theNewNode
        this.tail = theNewNode
    }

    deque(): T | undefined {
        if (this.length === 0) return undefined

        this.length--
        const theOldNode = this.head
        if (theOldNode === this.tail) this.head = this.tail = undefined
        if (theOldNode?.next) this.head = theOldNode.next
        return theOldNode?.value
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    printFromStartToFinish(): void {
        if (this.length > 0) {

            let currentNode = this.head

            do {
                console.log(currentNode?.value)
                currentNode = currentNode?.next
            } while (currentNode !== undefined)
        }
    }
}
