"use strict";

////////////////////////////////////////////////////////////////////////////////////
const nemo = ["nemo"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  const t1 = performance.now();
  console.log(`findNemo took ${t1 - t0} milliseconds.`);
}

findNemo(large);
////////////////////////////////////////////////////////////////////////////////////
