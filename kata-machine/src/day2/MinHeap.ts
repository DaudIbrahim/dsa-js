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
        if (this.data.length === 0) return 0

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
            const temp = parentVal
            this.data[parentIndex] = currentVal
            this.data[idx] = temp
            this.heapifyUp(parentIndex)
        }
    }

    private heapifyDown(idx: number) {
        if (idx >= this.data.length) return

        const leftChildIdx = this.leftChild(idx)
        const rightChildIdx = this.rightChild(idx)
        const leftChildVal = this.data[leftChildIdx]
        const rightChildVal = this.data[rightChildIdx]
        const parentVal = this.data[idx]

        // Your mistake here was that you forgot to compare which child is smaller

        if (leftChildVal < rightChildVal && leftChildVal < parentVal) {
            const temp = parentVal
            this.data[idx] = leftChildVal
            this.data[leftChildIdx] = temp
            this.heapifyDown(leftChildIdx)
        } else if (rightChildVal < leftChildVal && rightChildVal < parentVal) {
            const temp = parentVal
            this.data[idx] = rightChildVal
            this.data[rightChildIdx] = temp
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
