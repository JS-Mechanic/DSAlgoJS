"use strict";

////////////////////////////////////////////////////////////////////////////////////
const nemo = ["nemo"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
}

findNemo(large);  // O(n) --> Linear time
////////////////////////////////////////////////////////////////////////////////////
const boxes = [0, 1, 2, 3, 4, 5, 6];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);  // O(1)
  console.log(boxes[1]);  // O(1)
}

logFirstTwoBoxes(boxes);  // O(2) = O(1)
////////////////////////////////////////////////////////////////////////////////////
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i <= input.length; i++) { // O(n)
    anotherFunction();  // O(n)
    let stranger = true;  // O(n)
    a++;  // O(n)
  }
  return a;
}

funChallenge([1, 2, 3]);  // O(3 + 4n) = O(n)
////////////////////////////////////////////////////////////////////////////////////
function anotherFunChallenge(input) {
  let a = 5;  // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1;  // O(n)
    let y = i + 2;  // O(n)
    let z = i + 3;  // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;  // O(n)
    let q = j * 2;  // O(n)
  }
  let whoAmI = "I don't know";  // O(1)
}

anotherFunChallenge([1, 2, 3]); // O(4 + 5n) = O(n)
////////////////////////////////////////////////////////////////////////////////////
function printFirstItemPrintFirstHalfOfItemsPrintHi100Times(items) {
  console.log(items[0]);  // O(1)
  const middleIndex = Math.floor(items.length / 2);
  let index = 0;
  while (index < middleIndex) { // O(n / 2)
    console.log(items[middleIndex]);
    index++;
  }
  for (let i = 0; i < 100; i++) { // O(100)
    console.log("Hi");
  }
}
// Overall runtime complexity: O(1 + n/2 + 100) = O(n)
printFirstItemPrintFirstHalfOfItemsPrintHi100Times([1, 2, 3, 4, 5, 6]);
////////////////////////////////////////////////////////////////////////////////////
function compressBoxesTwice(boxes) {
  boxes.forEach(box => console.log(box)); // O(n)
  boxes.forEach(box => console.log(box)); // O(n)
}
// Overall runtime complexity: O(2n) = O(n)
compressBoxesTwice([1, 2, 3, 4]);
////////////////////////////////////////////////////////////////////////////////////
function compressBoxesTwiceV2(boxes1, boxes2) {
  boxes1.forEach(box => console.log(box)); // O(n)
  boxes2.forEach(box => console.log(box)); // O(m)
}
// Overall runtime complexity: O(n + m)
compressBoxesTwiceV2([1, 2, 3, 4], [5, 6, 7, 8, 9]);
////////////////////////////////////////////////////////////////////////////////////
// Log all pairs of array:
const alphabets = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`(${array[i]}, ${array[j]})`);
    }
  }
}
logAllPairsOfArray(alphabets);
////////////////////////////////////////////////////////////////////////////////////
