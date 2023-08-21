function addTo80(n) {
    console.log("Long time");
    return 80 + n;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

////////////////////////////////////////////////////////////////////////////////////
console.log("-".repeat(50));

const cache = {};

function memoizedAddTo80(n) {
    if (n in cache) return cache[n];
    console.log("Long time");
    cache[n] = 80 + n;
    return cache[n];
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

////////////////////////////////////////////////////////////////////////////////////
console.log("-".repeat(50));

let numCalculationsRegularFib = 0;

function fibonacci(n) {
    // Time complexity: O(2^n)
    if (n < 2) return n;
    numCalculationsRegularFib++;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fib30 = fibonacci(30);
console.log(`Fib(30): ${fib30}`);
console.log(`${numCalculationsRegularFib} operations have been done for calculating fib(30)`);

////////////////////////////////////////////////////////////////////////////////////
console.log("-".repeat(50));
