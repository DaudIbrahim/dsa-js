
const arr = new Array(3).fill(false)
const idx = 6;

let i = arr.length - 1

for (; i < idx; i++) {
    arr.push(true)
    console.log(i);
}

console.log(arr.length)
arr[idx] = false

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j])
}