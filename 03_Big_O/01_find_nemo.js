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
