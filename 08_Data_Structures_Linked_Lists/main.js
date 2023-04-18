"use strict";

////////////////////////////////////////////////////////////////////////////////////

// What is the pointer:
// let obj1 = {a: true};
// let obj2 = obj1;
// obj1 = "JavaScript";
// delete obj1;
// console.log(obj1);
// console.log(obj2);

////////////////////////////////////////////////////////////////////////////////////
// Implementing a linked list from scratch:

class Node {
    // Linked List Node Implementation
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
