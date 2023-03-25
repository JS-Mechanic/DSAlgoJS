"use strict";

function printAllNumbersAndThenAllPairSums(numbers) {
    console.log("Numbers are:");
    numbers.forEach(number => console.log(number));     // O(n)

    console.log("Pair sums are:");
    numbers.forEach(firstOfPair => {
        numbers.forEach(secondOfPair => {
            console.log(firstOfPair + secondOfPair);        // O(n^2)
        })
    })
}

printAllNumbersAndThenAllPairSums([1, 2, 3, 4, 5]);
// Overall runtime complexity: O(n + n^2) = O(n^2)
////////////////////////////////////////////////////////////////////////////////////

// Space complexity:
function boooooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("boooooo");
    }
}

boooooo([1, 2, 3, 4, 5]);
// Space complexity is: O(1)

////////////////////////////////////////////////////////////////////////////////////

function arrayOfHiNTimes(n) {
    let arrayHi = [];
    for (let i = 0; i < n; i++) {
        arrayHi[i] = "Hi";
    }
    return arrayHi;
}

console.log(arrayOfHiNTimes(6));
// Space complexity is: O(n)

////////////////////////////////////////////////////////////////////////////////////

// Find first and last element of array:
const array = ["Hi", "My", "Name", "Is", "JavaScript"];
console.log(array.at(0));   // O(1)
console.log(array.at(-1));  // O(1)

////////////////////////////////////////////////////////////////////////////////////

// Compare tweets based on their date:
const tweets = [
    {
        tweet: "Hi",
        date: 2021
    },
    {
        tweet: "From",
        date: 2022
    },
    {
        tweet: "JavaScript",
        date: 2023
    }
];
// Time complexity is: O(n^2)

////////////////////////////////////////////////////////////////////////////////////

// What is the time complexity of the following code:

"HelloFromJavaScript".length;

// That depends on built in method implementation but since javascript strings has length property
// So the time complexity is: O(1)

////////////////////////////////////////////////////////////////////////////////////

// Test data:
const first = ["a", "b", "c", "d", "x"];
const second = ["e", "f", "g", "x"];

// First Solution - critical - Not efficient:
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true
        }
    }
    return false;
}

console.log(containsCommonItem(first, second));
// Time complexity is: O(a*b) - because array1.length is not equal to array2.length.
// Space complexity is: O(1) - because of defining a function.



// Second Solution - Efficient - Using hash tables:
function containsCommonItemV2(arr1, arr2) {
    let map = {};
    for (let i = 0; i <arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(containsCommonItemV2(first, second));
// Time complexity is: O(a+b)
// Space complexity is: O(a) - because of storing array1 into an object.



// Third Solution - Most efficient - Using javascript builtin methods:
function containsCommonItemV3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItemV3(first, second));
// Time complexity is: O(a+b)
// Space complexity is: O(1) - because of defining a function.

////////////////////////////////////////////////////////////////////////////////////
