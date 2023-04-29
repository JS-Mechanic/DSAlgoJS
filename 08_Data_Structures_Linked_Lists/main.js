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
// Implementing a singly linked list from scratch:

class SinglyNode {
    // Linked List Node Implementation
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    // Linked List Implementation
    constructor(value) {
        this.head = new SinglyNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new SinglyNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new SinglyNode(value);
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

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new SinglyNode(value);
        const nodeBefore = this.traverseToIndex(index - 1);
        const pointerHolder = nodeBefore.next;
        nodeBefore.next = newNode;
        newNode.next = pointerHolder;
        this.length++;
        return this.print();
    }

    remove(index) {
        if (index === 0) {  // first node
            this.head = this.traverseToIndex(1);
            delete this.traverseToIndex(0);
        } else if (index === this.length - 1) { // Last node
            this.traverseToIndex(index - 1).next = null;
            delete this.traverseToIndex(index);
        } else {    // A node in the middle of linked list
            const beforeNode = this.traverseToIndex(index - 1);
            beforeNode.next = this.traverseToIndex(index + 1);
            delete this.traverseToIndex(index);
        }
        this.length--;
        return this.print();
    }
}

const ll = new SinglyLinkedList(10);
ll.prepend(5);
ll.append(16);
ll.append(20);
ll.insert(2, 12);
ll.remove(1);
console.log(ll.print());
