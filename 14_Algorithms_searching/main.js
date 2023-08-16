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
console.log("BFS");

// BFS and DFS in JavaScript:
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

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        return this.breadthFirstSearchRecursive(queue, list);
    }

    depthFirstSearchInOrder() {
        return traverseInOrder(this.root, []);
    }

    depthFirstSearchPreOrder() {
        return traversePreOrder(this.root, []);
    }

    depthFirstSearchPostOrder() {
        return traversePostOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) traverseInOrder(node.left, list);
    list.push(node.value);
    if (node.right) traverseInOrder(node.right, list);
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) traversePreOrder(node.left, list);
    if (node.right) traversePreOrder(node.right, list);
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) traversePostOrder(node.left, list);
    if (node.right) traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []));


console.log("*".repeat(30));
console.log("DFS");
// DFS - Depth First Search:
// InOrder: [1, 4, 6, 9, 15, 20, 170]
console.log(tree.depthFirstSearchInOrder());
//PreOrder: [9, 4, 1, 6, 20, 15, 170]
console.log(tree.depthFirstSearchPreOrder());
//PostOrder: [1, 6, 4, 15, 170, 20, 9]
console.log(tree.depthFirstSearchPostOrder());
