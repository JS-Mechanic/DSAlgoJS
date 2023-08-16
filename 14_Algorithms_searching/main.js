// Linear Search in JavaScript:

const fruits = ["Apple", "Orange", "Mellon", "Watermelon", "Mango", "Strawberry", "Avocado"]

// First way:
console.log(fruits.indexOf("Mango"));

// Second way:
console.log(fruits.findIndex((item) => item === "Mango"));

// Third way:
console.log(fruits.find((item) => item === "Mango"));

// Fourth way:
console.log(fruits.includes("Mango"));

console.log("*".repeat(30));

// Breadth First Search in JavaScript:
// Binary Search Tree:
class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Go to the left side
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    // Go to the right side
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) currentNode = currentNode.left;
            else if (value > currentNode.value) currentNode = currentNode.right;
            else return currentNode;
        }
        return false;
    }
}
