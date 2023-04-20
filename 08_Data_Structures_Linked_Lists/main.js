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
            value: value,
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
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const ll = new LinkedList(10);
// console.log(ll);
ll.prepend(5);
ll.append(16);
ll.append(20);
console.log(ll);
