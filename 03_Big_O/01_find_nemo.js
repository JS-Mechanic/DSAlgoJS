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
