"use strict";

// We use the big O notation to describe the performance of an algorithm.
/*
* The big O notation according to wikipedia:
* It is a mathematical notation that describes the limiting behavior of a function when the
* argument tends towards a particular value or infinity.
* */

// Example 1:
const arr1 = [1, 2, 3, 4, 5, 6, 7];
function f1(array) {
  console.log(array[0]);  // Runtime complexity: O(1)
}
f1(arr1);
// Overall runtime complexity: O(1)


// Example 2:
const arr2 = [8, 9, 10, 11, 12];
function f2(array) {
  console.log(array[0]);   // Runtime complexity: O(1)
  console.log(array[1]);   // Runtime complexity: O(1)
}
f2(arr2);
// Overall runtime complexity: O(1)


// Example 3:
const arr3 = [1, 2, 3, 4, 5, 6];
function f3(array) {
  console.log(array[0]); // O(1)
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // O(n)
  }
  console.log(array[1]);  // O(1)
}
f3(arr3);
// Overall runtime complexity: O(n)


// Example 4:
function f4(a, b) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]); // O(n)
  }
  for (let j = 0; j < b.length; j++) {
    console.log(b[j]); // O(m)
  }
}
f4(arr3, arr1);
// Overall runtime complexity: O(n)


// Example 5:
function f5(array) {
  for (let i = 0; i < array.length; i++) {  // O(n)
    for (let j = 0; j < array.length; j++) {  // O(n)
      console.log(`(${i}, ${j})`);
    }
  }
}
f5(arr1);
// Overall runtime complexity: O(n * n) = O(n^2) Quadratic


// Example 6:
function f6(array) {
  for (let k = 0; k < array.length; k++) {  // O(n)
    console.log(`k is: ${k}`);
  }
  for (let i = 0; i < array.length; i++) {  // O(n)
    for (let j = 0; j < array.length; j++) {  // O(n)
      console.log(`(${i}, ${j})`);
    }
  }
}
f6(arr1);
// Overall runtime complexity: O(n + n ^ 2) = O(n ^ 2)
