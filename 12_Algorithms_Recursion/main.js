"use strict";

// Stack Overflow:
function callItself() {
    callItself();
}

// callItself();   // RangeError: Maximum call stack size exceeded


/*
Write two function that find the factorial of any number. One should use recursive
and the other should just use a for loop.
 */

const findFactorialIterative = function (num) { // O(n)
    let accumulator = 1;
    for (let i = 2; i <= num; i++) accumulator *= i;
    return accumulator;
}

console.log(`Iterative: ${findFactorialIterative(5)}`);


const findFactorialRecursive = function (num) { // O(n)
    if (num === 2) return 2;
    return num * findFactorialRecursive(num - 1);
}

console.log(`Recursive: ${findFactorialRecursive(5)}`);
