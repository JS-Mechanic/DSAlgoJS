"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peak() {
        // See the top element
        return this.top;
    }

    push(value) {
        // Push a value to the stack
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const pointerHolder = this.top;
            this.top = newNode;
            this.top.next = pointerHolder;
        }
        this.length++;
        return this;
    }

    pop() {
        // Remove a value from on top of stack
        if (!this.top) return null;
        if (this.top === this.bottom) this.bottom = null;
        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty() {
        // whether the stack is empty ir not
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.peak());
console.log(myStack.isEmpty());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.isEmpty());


class StackArray {
    constructor() {
        this.values = [];
    }
    peak() {
        return this.values.at(-1);
    }
    push(value) {
        this.values.push(value);
        return this;
    }
    pop() {
        return this.values.pop();
    }

    isEmpty() {
        return this.values.length === 0;
    }
}
