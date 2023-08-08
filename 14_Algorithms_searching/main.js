// Linear Search in JavaScript:

const fruits = ["Apple", "Orange", "Mellon", "Watermelon", "Mango", "Strawberry", "Avocado"]

// First way:
console.log(fruits.indexOf("Mango"));

// Second way:
console.log(fruits.findIndex((item) => item === "Mango"));

// Third way:
console.log(fruits.find((item) => item === "Mango"));

// Fourth way:
console.log(fruits.includes("Mango"));
