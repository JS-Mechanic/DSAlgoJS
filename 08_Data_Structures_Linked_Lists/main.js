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


class LinkedList {
    // Linked List Implementation
    constructor(value) {
        this.head = {
            values: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        this.head = {
            value: value,
            next: this.head,
        };
        this.length++;
        return this;
    }
}
