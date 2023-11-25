const arr = ['A', 'B', 'C']

let i = 0
let j = 0
let k = 0

/**
 * 1. check condition for i truthy/false
 * 2. run the body of the loop
 * 3. increment i
 */
for (; i < arr.length; i++) {
    console.log(arr[i])
}

for (; j < 0; j++) {
    console.log(arr[j])
}

for (; k <= 0; k++) {
    console.log(arr[k])
}

console.log(
    `i = ${i}`,
    `j = ${j}`,
    `k = ${k}`,
)


/**
 * While
 */
let anIndex = 0

while (anIndex > 1) {
    anIndex += 1
}

console.log(anIndex)

/**
 * Linked List
 * 
 * Patterns - fast and slow pointers, that one video on how to solve lnked list problems outlines 3 problems,
 * neetcode has an excelent explaination of fast and slow pointers
 */