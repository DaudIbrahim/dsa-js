/**
 * a -> B
 * b -> A
 */
let a = 'B';
let b = 'A';

/**
 * a -> B
 * b -> A
 * temp -> B
 */
let temp = a;

/**
 * Action
 * now a -> A
 * &.. b -> B
 */
a = b;
b = temp;

console.log(a, b);
