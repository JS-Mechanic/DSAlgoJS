"use strict";

const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
console.log(letters.sort());
console.log(basket.sort());
console.log(basket.sort((a, b) => a - b));
console.log(basket.sort((a, b) => b - a));
