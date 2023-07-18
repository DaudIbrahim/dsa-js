type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    /**
     * Queue
     * First in first out (FIFO)
     */
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        /**
         * Add
         */
        this.length++
        const theNewNode = { value: item, next: undefined }
        if(this.tail) this.tail.next = theNewNode
        if (this.head === undefined) this.head = theNewNode
        this.tail = theNewNode
    }

    deque(): T | undefined {
        /**
         * Remove
         */
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

const list = new Queue<number>();

list.enqueue(5);
list.enqueue(7);
list.enqueue(9);
list.enqueue(10);
list.enqueue(50);

list.deque();
list.deque();
list.deque();
list.deque();
list.deque();

list.printFromStartToFinish()

