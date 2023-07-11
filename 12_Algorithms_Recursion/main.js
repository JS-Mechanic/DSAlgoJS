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


/*
Given a number N, return the index value of the fibonacci sequence, where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

function fibonacciRecursive(n) {    // O(2^n)
	if (n < 2) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(12));


function fibonacciIterative(n) {    // O(n)
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr[n];
}

console.log(fibonacciIterative(12));


// Reverse String Using recursion:
function ReverseStringUsingRecursion(str) {
	if (str === "") return "";
	return ReverseStringUsingRecursion(str.substring(1)) + str.charAt(0);
}

console.log(ReverseStringUsingRecursion("JavaScript"));
