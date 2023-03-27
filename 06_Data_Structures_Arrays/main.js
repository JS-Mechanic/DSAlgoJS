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
