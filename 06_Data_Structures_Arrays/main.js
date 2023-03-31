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

////////////////////////////////////////////////////////////////////////////////////
