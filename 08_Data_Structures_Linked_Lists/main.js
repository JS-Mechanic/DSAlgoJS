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

////////////////////////////////////////////////////////////////////////////////////
// Implementing a doubly linked list from scratch:
class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = new DoublyNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new DoublyNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new DoublyNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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

    insert(index, value) {
        if (index >= this.length) return this.append(value);
        const newNode = new DoublyNode(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (this.length === 1) { // There is only one node inside the linked list.
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        } else if (index === 0) {   // Removing first node.
            this.head = this.traverseToIndex(index + 1);
            this.head.prev = null;
            this.length--;
            return this;
        } else if (index === this.length - 1) { // Removing last node.
            this.tail = this.traverseToIndex(index - 1);
            this.tail.next = null;
            this.length--;
            return this;
        } else {    // Removing node somewhere in the middle of linked list.
            const nodeBefore = this.traverseToIndex(index - 1);
            const nodeAfter = this.traverseToIndex(index + 1);
            nodeBefore.next = nodeAfter;
            nodeAfter.prev = nodeBefore;
            this.length--;
            return this;
        }
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
