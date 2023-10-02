/**
 * Frequency Counter Pattern
 * From O(n2) -> to O(n)
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    const counterOne = {};
    const counterTwo = {};

    for (let val of arr1) {
        counterOne[val] = (counterOne[val] || 0) + 1
    }

    for (let val of arr2) {
        counterTwo[val] = (counterTwo[val] || 0) + 1
    }

    for (let key in counterOne) {
        // Check if the keys exists
        if (Object.prototype.propertyIsEnumerable.call(counterTwo, key ** 2) === false) return false

        // Second compare if the keys have the same frequency
        if (counterTwo[key ** 2] !== counterOne[key]) return false
    }

    return true
}

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */
function validAnagram(phraseOne = '', phraseTwo = '') {
    if(phraseOne.length !== phraseTwo.length) return false

    const counterOne = Object.create(null)
    const counterTwo = Object.create(null)

    for (const letter of phraseOne) {
        counterOne[letter] = counterOne[letter] ? counterOne[letter] + 1 : 1;
    }

    for (const letter of phraseTwo) {
        counterTwo[letter] = counterTwo[letter] ? counterTwo[letter] + 1 : 1;
    }

    for (let key in counterOne) {
        // Check if the keys exists
        if (Object.prototype.propertyIsEnumerable.call(counterTwo, key) === false) return false

        // Second compare if the keys have the same frequency
        if (counterTwo[key] !== counterOne[key]) return false
    }

    return true
}


// Results
console.log(same([5, 5, 10], [25, 25, 100]));
console.log(validAnagram('a', 'a'))