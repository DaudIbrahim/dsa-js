export default class ArrayList<T> {
    public length: number;
    private arr: (T | null)[]

    constructor(len: number) {
        this.arr = new Array()
        this.length = 0
    }

    // Add to the beginning
    prepend(item: T): void {
        this.arr.unshift(item)
        this.addLength()
    }

    insertAt(item: T, idx: number): void {

        // Write Operation: Write to an existing index of the array
        if (idx <= this.getLastIndex()) {
            this.arr[idx] = item
            return
        }

        // Insert Operation: Grow the array by capacity
        let i = this.getLastIndex()

        for (; i < idx; i++) {
            this.arr.push(null)
            this.addLength()
        }

        this.arr[idx] = item
    }

    append(item: T): void {
        this.arr.push(item)
        this.addLength()
    }

    remove(item: T): T | undefined {
        const findIdx = this.arr.findIndex((element) => element === item)
        if (findIdx === -1) return undefined

        const returnItem = this.arr[findIdx] ?? undefined

        if (findIdx === this.getLastIndex()) {
            this.arr.pop()
            this.subtractLength()
        } else {
            this.arr[findIdx] = null
        }

        return returnItem
    }

    get(idx: number): T | undefined {
        if (idx > this.getLastIndex()) return undefined
        const returnItem = this.arr[idx]
        return returnItem === null ? undefined : returnItem
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.getLastIndex()) return undefined

        const returnItem = this.arr[idx] ?? undefined

        if (idx === this.getLastIndex()) {
            this.arr.pop()
            this.subtractLength()
        } else {
            this.arr[idx] = null
        }

        return returnItem
    }

    /** private */
    private addLength(): void {
        this.length += 1
    }
    private subtractLength(): void {
        this.length -= 1
    }
    private getLastIndex(): number {
        return this.length - 1
    }
}

const list = new ArrayList<number>(3);

list.append(5);
list.append(7);
list.append(9);

    console.log(list.get(2))
    console.log(list.removeAt(1))
    console.log(list.length)