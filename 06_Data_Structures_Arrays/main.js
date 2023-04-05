/*
*
* Arrays:
*
* Time complexity:
*     Access        Push        Insert        Delete
*     O(1)          O(1)|O(n)   O(n)          O(n)
*
* */

// Defining an array:
const stringsArray = ["a", "b", "c", "d"];

/*
*
* In 64-bit operating systems:
* 8 byte will be used to store each element, So:
* 8 times 4 = 32 bytes will be used for array above
*
* */

// Array methods:
stringsArray.push("e");   // O(1) | O(n) - O(1) if the array has room to fit the new element
                          // And O(n) if it needs to allocate more space.
stringsArray.pop();   // O(1)
stringsArray.unshift("x");    // O(n)—Looping over items and reassigning the indexes
stringsArray.splice(2, 0, "alien");   // O(n)—Adding “alien” to the middle


// Building an array from scratch:
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  get(index) {
    return this.data[index];
  }
  
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this;
  }
  
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  
  delete(index) {
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }
  
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const array = new CustomArray();
array.push("Hi").push("there").push("!").push("How").push("are").push("you");
array.delete(1);
console.log(array);

console.log("-".repeat(50));
////////////////////////////////////////////////////////////////////////////////////
// Coding Exercise:
// Write a function that reverses a string:

// Version #1:
function reverseStrV1(string) {
  if (typeof string !== "string") return 0;
  if (string.length < 2) return string;
  const backwards = [];
  const totalItems = string.length - 1;
  for (let i = totalItems; i >= 0; i--) { backwards.push(string[i]) }
  return backwards.join("");
}

// Version #2:
const reverseStrV2 = string => Array.from(string).reverse().toString().replaceAll(",", "");

// Version #3:
const reverseStrV3 = string => Array.from(string).reverse().join("");

// Version #4:
const reverseStrV4 = string => string.split("").reverse().join("");

// Version #5:
const reverseStrV5 = string => [...string].reverse().join("");

console.log(reverseStrV1("Milad Sadeghi DM"));
console.log(reverseStrV2("Milad Sadeghi DM"));
console.log(reverseStrV3("Milad Sadeghi DM"));
console.log(reverseStrV4("Milad Sadeghi DM"));
console.log(reverseStrV5("Milad Sadeghi DM"));

console.log("-".repeat(50));
////////////////////////////////////////////////////////////////////////////////////
// Merge sorted arrays:
const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30, 36, 48];

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

const result = mergeSortedArrays(arr1, arr2);
console.log(result);

////////////////////////////////////////////////////////////////////////////////////
