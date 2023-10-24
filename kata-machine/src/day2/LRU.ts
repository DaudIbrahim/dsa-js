/**
 * The entire data structure has to do with capacity and evicting items when over capacity
 * & as the name suggest we are essentially evicting the least recently used item
 */

/**
 * Update in this structure means the following
 * - update the list
 *      - move item to the start
 *      - evict item from end: when over capacity
 * - update the item itself
 *      - essentially updaing the content
 */

// a circular linked-list could be handy right here
// remember a circular linked-list is where head & tail point to a node istead of undefined

// doubly linked-list
type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

function createNode<V>(value: V): Node<V> {
    return { value }
}

export default class LRU<K, V> {
    // length for capacity
    private length: number;

    // track head & tail
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookUp: Map<K, Node<V>>;

    // kind of like reverse search index, creting a lookup for the value
    private reverseLookUp: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookUp = new Map<K, Node<V>>()
        this.reverseLookUp = new Map<Node<V>, K>()
    }

    update(key: K, value: V): void {
        // does it exist?
        //
        // if it does'nt we need to insert
        //  - check capacity and evict if over capacity
        //
        // if it does, update to the front of the list
        // and update the value itself

        let node = this.lookUp.get(key)

        if (!node) {
            node = createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()
            this.lookUp.set(key, node)
            this.reverseLookUp.set(node, key)
        } else {
            node.value = value
            this.detach(node)
            this.prepend(node)
        }
    }

    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookUp.get(key)
        if (!node) return undefined

        // update the value we found an move it to the front
        // sweet linked list operations of moving the currnt node to the head
        this.detach(node)
        this.prepend(node)

        // return out the value found or undefined if not exist
        return node.value
    }


    // Refer - in implementing LRU learnt the importance of writing helper/utility functions.

    // lot easier to break up these operations
    private detach(node: Node<V>): void {

        if (node.prev) {
            node.prev.next = node.next
        }

        if (node.next) {
            node.next.prev = node.prev
        }

        if (this.head === node) {
            this.head = this.head.next
        }

        if (this.tail === node) {
            this.tail = this.tail.prev
        }

        node.next = undefined
        node.prev = undefined
    }

    // lot easier to break up these operations
    private prepend(node: Node<V>): void {

        if (!this.head) {
            this.head = this.tail = node
            return
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    // evict LRU item from cache when cahce size exceeds capacity
    private trimCache(): void {

        if (this.length <= this.capacity) {
            return
        }

        const tail = this.tail as Node<V>
        this.detach(this.tail as Node<V>)

        const key = this.reverseLookUp.get(tail) as K
        this.lookUp.delete(key)
        this.reverseLookUp.delete(tail)
        this.length--
    }
}
