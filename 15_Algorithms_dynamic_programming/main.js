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
