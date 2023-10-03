/**
 * Heap
 * representation = [x, y, z] as tree
 * implementation = [parent, left, right] as an array
 */
export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = []
        this.length = 0
    }

    print() {
        console.log(this.data)
    }
    insert(value: number): void {
        this.data.push(value)
        this.length = this.data.length
        this.heapifyUp(this.data.length - 1)
    }
    delete(): number {
        if (this.data.length === 0) return -1

        const val = this.data[0]
        const newValue = this.data.pop()
        this.length = this.data.length
        if (newValue !== undefined) this.data[0] = newValue
        this.heapifyDown(0)
        return val
    }

    private heapifyUp(idx: number) {
        if (idx === 0) return

        const currentVal = this.data[idx]
        const parentIndex = this.parent(idx)
        const parentVal = this.data[parentIndex]

        if (currentVal < parentVal) {
            this.data[parentIndex] = currentVal
            this.data[idx] = parentVal
            this.heapifyUp(parentIndex)
        }
    }

    private heapifyDown(idx: number) {
        const leftChildIdx = this.leftChild(idx)
        const rightChildIdx = this.rightChild(idx)

        if (idx >= this.data.length || leftChildIdx >= this.data.length) {
            return
        }

        const leftChildVal = this.data[leftChildIdx]
        const rightChildVal = this.data[rightChildIdx]
        const parentVal = this.data[idx]

        // Your mistake here was that you forgot to compare which child is smaller
        // 1. First have to find the minimum child
        // 2. Second you do the comparison
        // 3. Finally you swap

        if (leftChildVal < rightChildVal && leftChildVal < parentVal) {
            this.data[idx] = leftChildVal
            this.data[leftChildIdx] = parentVal
            this.heapifyDown(leftChildIdx)
        } else if (rightChildVal < leftChildVal && rightChildVal < parentVal) {
            this.data[idx] = rightChildVal
            this.data[rightChildIdx] = parentVal
            this.heapifyDown(rightChildIdx)
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number): number {
        return (idx * 2) + 1
    }

    private rightChild(idx: number): number {
        return (idx * 2) + 2
    }
}
